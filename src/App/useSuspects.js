import { useLocalStorage } from './useLocalStorage';

function useSuspects() {

  const defaultSuspects = [
    {
      id: "s1",
      name: "Escarlata",
      marked: false,
      boxes: [
        {id: 'P1', value: false},
        {id: 'P2', value: false},
        {id: 'P3', value: false},
        {id: 'P4', value: false},
        {id: 'P5', value: false},
        {id: 'P6', value: false},
      ]
    },
    {
      id: "s2",
      name: "Blanco",
      marked: false,
      boxes: [
        {id: 'P1', value: false},
        {id: 'P2', value: false},
        {id: 'P3', value: false},
        {id: 'P4', value: false},
        {id: 'P5', value: false},
        {id: 'P6', value: false},
      ]
    },
    {
      id: "s3",
      name: "Moradillo",
      marked: false,
      boxes: [
        {id: 'P1', value: false},
        {id: 'P2', value: false},
        {id: 'P3', value: false},
        {id: 'P4', value: false},
        {id: 'P5', value: false},
        {id: 'P6', value: false},
      ]
    },
    {
      id: "s4",
      name: "Verdi",
      marked: false,
      boxes: [
        {id: 'P1', value: false},
        {id: 'P2', value: false},
        {id: 'P3', value: false},
        {id: 'P4', value: false},
        {id: 'P5', value: false},
        {id: 'P6', value: false},
      ]
    },
    {
      id: "s5",
      name: "Azulino",
      marked: false,
      boxes: [
        {id: 'P1', value: false},
        {id: 'P2', value: false},
        {id: 'P3', value: false},
        {id: 'P4', value: false},
        {id: 'P5', value: false},
        {id: 'P6', value: false},
      ]
    },
    {
      id: "s6",
      name: "Mostaza",
      marked: false,
      boxes: [
        {id: 'P1', value: false},
        {id: 'P2', value: false},
        {id: 'P3', value: false},
        {id: 'P4', value: false},
        {id: 'P5', value: false},
        {id: 'P6', value: false},
      ]
    },
  ];

  const {
    item: suspects,
    saveItem: saveSuspects,
    error,
  } = useLocalStorage('SUSPECTS_V1', defaultSuspects);

  const toggleSuspect = (id) => {
    const suspectIndex = suspects.findIndex(suspect => suspect.id === id);
    const newSuspects = [...suspects];
    newSuspects[suspectIndex].marked = !suspects[suspectIndex].marked;
    saveSuspects(newSuspects);
  };

  const toggleSuspectBox = (id, boxId) => {
    const suspectIndex = suspects.findIndex(suspect => suspect.id === id);
    const newSuspects = [...suspects];

    const suspectBoxIndex = newSuspects[suspectIndex].boxes.findIndex(box => box.id === boxId);
    const newBoxes = [...newSuspects[suspectIndex].boxes];
    newBoxes[suspectBoxIndex].value = !newBoxes[suspectBoxIndex].value;
    newSuspects[suspectIndex].boxes = newBoxes;
    saveSuspects(newSuspects);
  };

  const resetSuspects = () => {
    saveSuspects(defaultSuspects);
  }

  return {
    error,
    toggleSuspect,
    toggleSuspectBox,
    suspects,
    resetSuspects,
  };


}

export { useSuspects };
