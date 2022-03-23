import { useLocalStorage } from './useLocalStorage';

function useSuspects() {

  const defaultSuspects = [
    {
      id: "s1",
      name: "Escarlata",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-400"},
        {id: 'P2', value: false, color: "bg-gray-100"},
        {id: 'P3', value: false, color: "bg-fuchsia-400"},
        {id: 'P4', value: false, color: "bg-green-400"},
        {id: 'P5', value: false, color: "bg-blue-400"},
        {id: 'P6', value: false, color: "bg-yellow-400"},
      ]
    },
    {
      id: "s2",
      name: "Blanco",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-400"},
        {id: 'P2', value: false, color: "bg-gray-100"},
        {id: 'P3', value: false, color: "bg-fuchsia-400"},
        {id: 'P4', value: false, color: "bg-green-400"},
        {id: 'P5', value: false, color: "bg-blue-400"},
        {id: 'P6', value: false, color: "bg-yellow-400"},
      ]
    },
    {
      id: "s3",
      name: "Moradillo",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-400"},
        {id: 'P2', value: false, color: "bg-gray-100"},
        {id: 'P3', value: false, color: "bg-fuchsia-400"},
        {id: 'P4', value: false, color: "bg-green-400"},
        {id: 'P5', value: false, color: "bg-blue-400"},
        {id: 'P6', value: false, color: "bg-yellow-400"},
      ]
    },
    {
      id: "s4",
      name: "Verdi",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-400"},
        {id: 'P2', value: false, color: "bg-gray-100"},
        {id: 'P3', value: false, color: "bg-fuchsia-400"},
        {id: 'P4', value: false, color: "bg-green-400"},
        {id: 'P5', value: false, color: "bg-blue-400"},
        {id: 'P6', value: false, color: "bg-yellow-400"},
      ]
    },
    {
      id: "s5",
      name: "Azulino",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-400"},
        {id: 'P2', value: false, color: "bg-gray-100"},
        {id: 'P3', value: false, color: "bg-fuchsia-400"},
        {id: 'P4', value: false, color: "bg-green-400"},
        {id: 'P5', value: false, color: "bg-blue-400"},
        {id: 'P6', value: false, color: "bg-yellow-400"},
      ]
    },
    {
      id: "s6",
      name: "Mostaza",
      marked: false,
      boxes: [
        {id: 'P1', value: false, color: "bg-red-400"},
        {id: 'P2', value: false, color: "bg-gray-100"},
        {id: 'P3', value: false, color: "bg-fuchsia-400"},
        {id: 'P4', value: false, color: "bg-green-400"},
        {id: 'P5', value: false, color: "bg-blue-400"},
        {id: 'P6', value: false, color: "bg-yellow-400"},
      ]
    },
  ];

  const {
    item: suspects,
    saveItem: saveSuspects,
    error,
  } = useLocalStorage('SUSPECTS_V1.0.2', defaultSuspects);

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
