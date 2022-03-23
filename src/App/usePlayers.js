import { useLocalStorage } from './useLocalStorage';

function usePlayers() {
  const {
    item: players,
    saveItem: savePlayers,
    error,
  } = useLocalStorage('PLAYERS_V1.0.2', [
    {id: "P1", name: "P1", color: "bg-red-500"},
    {id: "P2", name: "P2", color: "bg-gray-100"},
    {id: "P3", name: "P3", color: "bg-fuchsia-500"},
    {id: "P4", name: "P4", color: "bg-green-500"},
    {id: "P5", name: "P5", color: "bg-blue-500"},
    {id: "P6", name: "P6", color: "bg-yellow-500"},
  ]);

  const modifyPlayer = (id, newName) => {
    const playerIndex = players.findIndex(player => player.id === id);
    const newPlayers = [...players];
    newPlayers[playerIndex].name = newName;
    savePlayers(newPlayers);
  };

  return {
    error,
    modifyPlayer,
    players
  };


}

export { usePlayers };
