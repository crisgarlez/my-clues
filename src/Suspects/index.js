import React from "react";

function Suspects(props) {

  const renderFunc = props.children || props.render;

  return(
    <section className=''>
      <header className=''>
        <h1>Sospechosos</h1>
      </header>
      <div className='bg-gray-200'>
        {props.suspects.map(renderFunc)}
      </div>
    </section>
  );
}

export {Suspects};
