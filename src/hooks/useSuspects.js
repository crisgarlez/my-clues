import { useLocalStorage } from './useLocalStorage';

function useSuspects() {

  const defaultSuspects = [
    {
      id: "s1",
      name: "Escarlata",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-200"},
        {id: 'P2', value: false, color: "bg-yellow-200"},
        {id: 'P3', value: false, color: "bg-green-200"},
        {id: 'P4', value: false, color: "bg-blue-200"},
        {id: 'P5', value: false, color: "bg-fuchsia-200"},
        {id: 'P6', value: false, color: "bg-white"},
      ]
    },
    {
      id: "s2",
      name: "Blanco",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-200"},
        {id: 'P2', value: false, color: "bg-yellow-200"},
        {id: 'P3', value: false, color: "bg-green-200"},
        {id: 'P4', value: false, color: "bg-blue-200"},
        {id: 'P5', value: false, color: "bg-fuchsia-200"},
        {id: 'P6', value: false, color: "bg-white"},
      ]
    },
    {
      id: "s3",
      name: "Moradillo",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-200"},
        {id: 'P2', value: false, color: "bg-yellow-200"},
        {id: 'P3', value: false, color: "bg-green-200"},
        {id: 'P4', value: false, color: "bg-blue-200"},
        {id: 'P5', value: false, color: "bg-fuchsia-200"},
        {id: 'P6', value: false, color: "bg-white"},
      ]
    },
    {
      id: "s4",
      name: "Verdi",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-200"},
        {id: 'P2', value: false, color: "bg-yellow-200"},
        {id: 'P3', value: false, color: "bg-green-200"},
        {id: 'P4', value: false, color: "bg-blue-200"},
        {id: 'P5', value: false, color: "bg-fuchsia-200"},
        {id: 'P6', value: false, color: "bg-white"},
      ]
    },
    {
      id: "s5",
      name: "Azulino",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-200"},
        {id: 'P2', value: false, color: "bg-yellow-200"},
        {id: 'P3', value: false, color: "bg-green-200"},
        {id: 'P4', value: false, color: "bg-blue-200"},
        {id: 'P5', value: false, color: "bg-fuchsia-200"},
        {id: 'P6', value: false, color: "bg-white"},
      ]
    },
    {
      id: "s6",
      name: "Mostaza",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-200"},
        {id: 'P2', value: false, color: "bg-yellow-200"},
        {id: 'P3', value: false, color: "bg-green-200"},
        {id: 'P4', value: false, color: "bg-blue-200"},
        {id: 'P5', value: false, color: "bg-fuchsia-200"},
        {id: 'P6', value: false, color: "bg-white"},
      ]
    },
  ];

  const {
    item: suspects,
    saveItem: saveSuspects,
    error,
  } = useLocalStorage('SUSPECTS_V1.0.3', defaultSuspects);

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
