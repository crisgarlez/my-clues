import { useLocalStorage } from './useLocalStorage';

function useRooms() {

  const defaultRooms = [
    {
      id: "r1",
      name: "Estudio",
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
      id: "r2",
      name: "Patio",
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
      id: "r3",
      name: "Baño",
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
      id: "r4",
      name: "Cocina",
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
      id: "r5",
      name: "Garaje",
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
      id: "r6",
      name: "Comedor",
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
      id: "r7",
      name: "Sala de juegos",
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
      id: "r8",
      name: "Habitación",
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
      id: "r9",
      name: "Sala",
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
    item: rooms,
    saveItem: saveRooms,
    error,
  } = useLocalStorage('ROOMS_V1.0.3', defaultRooms);

  const toggleRoom = (id) => {
    const roomIndex = rooms.findIndex(room => room.id === id);
    const newRooms = [...rooms];
    newRooms[roomIndex].marked = !rooms[roomIndex].marked;
    saveRooms(newRooms);
  };

  const toggleRoomBox = (id, boxId) => {
    const roomIndex = rooms.findIndex(room => room.id === id);
    const newRooms = [...rooms];

    const roomBoxIndex = newRooms[roomIndex].boxes.findIndex(box => box.id === boxId);
    const newBoxes = [...newRooms[roomIndex].boxes];
    newBoxes[roomBoxIndex].value = !newBoxes[roomBoxIndex].value;
    newRooms[roomIndex].boxes = newBoxes;
    saveRooms(newRooms);
  };

  const resetRooms = () => {
    saveRooms(defaultRooms);
  }

  return {
    error,
    toggleRoom,
    toggleRoomBox,
    rooms,
    resetRooms,
  };


}

export { useRooms };
