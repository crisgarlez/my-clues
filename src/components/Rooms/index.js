import React from "react";

function Rooms(props) {

  const renderFunc = props.children || props.render;

  return(
    <section className=''>
      <header className='pl-4 py-2 bg-white'>
        <span className='text-xl font-normal font-sans'>
          Habitaciones
        </span>
      </header>
      <div className='border-b border-b-gray-400'>
        {props.rooms.map(renderFunc)}
      </div>
    </section>
  );
}

export {Rooms};
