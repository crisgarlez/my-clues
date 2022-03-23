import React from 'react';

// component
import {Header} from "../Header";
import {Players} from "../Players";
import {Suspects} from "../Suspects";
import {Weapons} from "../Weapons";
import {Rooms} from "../Rooms";
import {Suspect} from "../Suspect";
import {Weapon} from "../Weapon";
import {Room} from "../Room";
import {Player} from "../Player";
import { usePlayers } from './usePlayers';
import { useSuspects } from './useSuspects';
import { useWeapons } from './useWeapons';
import { useRooms } from './useRooms';

function App() {

  const {
    players,
  } = usePlayers();

  const {
    suspects,
    toggleSuspect,
    toggleSuspectBox,
    resetSuspects,
  } = useSuspects();

  const {
    weapons,
    toggleWeapon,
    toggleWeaponBox,
    resetWeapons,
  } = useWeapons();

  const {
    rooms,
    toggleRoom,
    toggleRoomBox,
    resetRooms,
  } = useRooms();

  const reset = () => {
    resetSuspects();
    resetWeapons();
    resetRooms();
  }

  return (
    <React.Fragment>
      <Header
        reset={reset}
      />

      <Players
        players={players}
      >
        {player => (
          <Player
            key={player.id}
            player={player}
          />
        )}
      </Players>

      <Suspects
        suspects={suspects}
      >
        {suspect => (
          <Suspect
            key={suspect.id}
            suspect={suspect}
            toggleSuspect={toggleSuspect}
            toggleSuspectBox={toggleSuspectBox}
          />
        )}
      </Suspects>
      <Weapons
        weapons={weapons}
      >
        {weapon => (
          <Weapon
            key={weapon.id}
            weapon={weapon}
            toggleWeapon={toggleWeapon}
            toggleWeaponBox={toggleWeaponBox}
          />
        )}
      </Weapons>
      <Rooms
        rooms={rooms}
      >
        {room => (
          <Room
            key={room.id}
            room={room}
            toggleRoom={toggleRoom}
            toggleRoomBox={toggleRoomBox}
          />
        )}
      </Rooms>
    </React.Fragment>
  );
}

export default App;
