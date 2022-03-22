import React from "react";

function Suspects(props) {
  return(
    <section className=''>
      <header className=''>
        <h1>Sospechosos</h1>
      </header>
      <div className='bg-gray-200'>
        {props.children}
      </div>
    </section>
  );
}

export {Suspects};
