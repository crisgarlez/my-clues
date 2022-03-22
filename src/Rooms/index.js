import React from "react";

function Rooms(props) {
  return(
    <section className=''>
      <header>
        <h1>Habitaciones</h1>
      </header>
      <div className='bg-gray-200'>
        {props.children}
      </div>
    </section>
  );
}

export {Rooms};
