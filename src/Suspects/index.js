import React from "react";

function Suspects(props) {

  const renderFunc = props.children || props.render;

  return(
    <section className=''>
      <header className='pl-4 py-2 bg-white'>
        <span className='text-xl font-normal font-sans'>
          Sospechosos
        </span>
      </header>
      <div className='border-b border-b-gray-400'>
        {props.suspects.map(renderFunc)}
      </div>
    </section>
  );
}

export {Suspects};
