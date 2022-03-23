import { useLocalStorage } from './useLocalStorage';

function useWeapons() {

  const defaultWeapons = [
    {
      id: "w1",
      name: "Candelabro",
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
      id: "w2",
      name: "Daga",
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
      id: "w3",
      name: "Soga",
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
      id: "w4",
      name: "Revolver",
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
      id: "w5",
      name: "Tubería",
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
      id: "w6",
      name: "Llave Inglesa",
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
    item: weapons,
    saveItem: saveWeapons,
    error,
  } = useLocalStorage('WEAPONS_V1.0.2', defaultWeapons);

  const toggleWeapon = (id) => {
    const weaponIndex = weapons.findIndex(weapon => weapon.id === id);
    const newWeapons = [...weapons];
    newWeapons[weaponIndex].marked = !weapons[weaponIndex].marked;
    saveWeapons(newWeapons);
  };

  const toggleWeaponBox = (id, boxId) => {
    const weaponIndex = weapons.findIndex(weapon => weapon.id === id);
    const newWeapons = [...weapons];

    const weaponBoxIndex = newWeapons[weaponIndex].boxes.findIndex(box => box.id === boxId);
    const newBoxes = [...newWeapons[weaponIndex].boxes];
    newBoxes[weaponBoxIndex].value = !newBoxes[weaponBoxIndex].value;
    newWeapons[weaponIndex].boxes = newBoxes;
    saveWeapons(newWeapons);
  };

  const resetWeapons = () => {
    saveWeapons(defaultWeapons);
  }

  return {
    error,
    toggleWeapon,
    toggleWeaponBox,
    weapons,
    resetWeapons,
  };


}

export { useWeapons };
