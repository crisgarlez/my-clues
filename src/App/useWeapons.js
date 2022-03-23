import { useLocalStorage } from './useLocalStorage';

function useWeapons() {

  const defaultWeapons = [
    {
      id: "w1",
      name: "Candelabro",
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
      id: "w2",
      name: "Daga",
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
      id: "w3",
      name: "Soga",
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
      id: "w4",
      name: "Revolver",
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
      id: "w5",
      name: "Tubería",
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
      id: "w6",
      name: "Llave Inglesa",
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
    item: weapons,
    saveItem: saveWeapons,
    error,
  } = useLocalStorage('WEAPONS_V1', defaultWeapons);

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
