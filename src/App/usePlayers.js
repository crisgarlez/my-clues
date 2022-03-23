import { useLocalStorage } from './useLocalStorage';

function usePlayers() {
  const {
    item: players,
    saveItem: savePlayers,
    error,
  } = useLocalStorage('PLAYERS_V1.0.3', [
    {id: "P1", name: "P1", color: "bg-red-400"},
    {id: "P2", name: "P2", color: "bg-yellow-400"},
    {id: "P3", name: "P3", color: "bg-green-400"},
    {id: "P4", name: "P4", color: "bg-blue-400"},
    {id: "P5", name: "P5", color: "bg-fuchsia-400"},
    {id: "P6", name: "P6", color: "bg-white"},
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
