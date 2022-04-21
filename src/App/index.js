import React from 'react';
import { hot } from 'react-hot-loader/root';

// component
import {Header} from "../Header";
import { usePlayers } from './usePlayers';
import {Players} from "../Players";
import {Player} from "../Player";
import { useSuspects } from './useSuspects';
import {Suspects} from "../Suspects";
import {Suspect} from "../Suspect";
import { useWeapons } from './useWeapons';
import {Weapons} from "../Weapons";
import {Weapon} from "../Weapon";
import { useRooms } from './useRooms';
import {Rooms} from "../Rooms";
import {Room} from "../Room";
import {Footer} from "../Footer";

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
      <Footer/>
    </React.Fragment>
  );
}

export default hot(App);
