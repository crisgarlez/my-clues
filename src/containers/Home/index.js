import React from "react";

// hooks
import {usePlayers} from "../../hooks/usePlayers";
import {useSuspects} from "../../hooks/useSuspects";
import {useWeapons} from "../../hooks/useWeapons";
import {useRooms} from "../../hooks/useRooms";

// components
import {Header} from "../../components/Header";
import {Players} from "../../components/Players";
import {Player} from "../../components/Player";
import {Suspects} from "../../components/Suspects";
import {Suspect} from "../../components/Suspect";
import {Weapons} from "../../components/Weapons";
import {Weapon} from "../../components/Weapon";
import {Rooms} from "../../components/Rooms";
import {Room} from "../../components/Room";
import {Footer} from "../../components/Footer";

function Home() {
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

export { Home };
