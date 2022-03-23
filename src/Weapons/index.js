import React from "react";

function Weapons(props) {

  const renderFunc = props.children || props.render;

  return(
    <section className=''>
      <header>
        <h1>Armas</h1>
      </header>
      <div className='bg-gray-200'>
        {props.weapons.map(renderFunc)}
      </div>
    </section>
  );
}

export {Weapons};
