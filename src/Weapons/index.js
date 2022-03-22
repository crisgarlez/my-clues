import React from "react";

function Weapons(props) {
  return(
    <section className=''>
      <header>
        <h1>Armas</h1>
      </header>
      <div className='bg-gray-200'>
        {props.children}
      </div>
    </section>
  );
}

export {Weapons};
