import React from "react";

function Rooms(props) {

  const renderFunc = props.children || props.render;

  return(
    <section className=''>
      <header>
        <h1>Habitaciones</h1>
      </header>
      <div className='bg-gray-200'>
        {props.rooms.map(renderFunc)}
      </div>
    </section>
  );
}

export {Rooms};
