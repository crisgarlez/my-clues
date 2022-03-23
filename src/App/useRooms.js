import { useLocalStorage } from './useLocalStorage';

function useRooms() {

  const defaultRooms = [
    {
      id: "r1",
      name: "Estudio",
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
      id: "r2",
      name: "Patio",
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
      id: "r3",
      name: "Baño",
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
      id: "r4",
      name: "Cocina",
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
      id: "r5",
      name: "Garaje",
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
      id: "r6",
      name: "Comedor",
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
      id: "r7",
      name: "Sala de juegos",
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
      id: "r8",
      name: "Habitación",
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
      id: "r9",
      name: "Sala",
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
    item: rooms,
    saveItem: saveRooms,
    error,
  } = useLocalStorage('ROOMS_V1', defaultRooms);

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
