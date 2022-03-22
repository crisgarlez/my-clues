import React from 'react';

// component
import {Header} from "./Header";
import {Players} from "./Players";
import {Suspects} from "./Suspects";
import {Weapons} from "./Weapons";
import {Rooms} from "./Rooms";
import {Suspect} from "./Suspect";
import {Weapon} from "./Weapon";
import {Room} from "./Room";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Players/>
      <Suspects>
        <>
          <Suspect suspect={'Escarlata'}/>
          <Suspect suspect={'Blanco'}/>
          <Suspect suspect={'Moradillo'}/>
          <Suspect suspect={'Verdi'}/>
          <Suspect suspect={'Azulino'}/>
          <Suspect suspect={'Mostaza'}/>
        </>
      </Suspects>
      <Weapons>
        <>
          <Weapon weapon={'Candelabro'}/>
          <Weapon weapon={'Daga'}/>
          <Weapon weapon={'Soga'}/>
          <Weapon weapon={'Revolver'}/>
          <Weapon weapon={'Tubería'}/>
          <Weapon weapon={'Llave Inglesa'}/>
        </>
      </Weapons>
      <Rooms>
        <>
          <Room room={'Estudio'}/>
          <Room room={'Patio'}/>
          <Room room={'Baño'}/>
          <Room room={'Cocina'}/>
          <Room room={'Garaje'}/>
          <Room room={'Comedor'}/>
          <Room room={'Sala de juegos'}/>
          <Room room={'Habitación'}/>
          <Room room={'Sala'}/>
        </>
      </Rooms>
    </React.Fragment>
  );
}

export default App;
