import React from "react";

function Players(props) {

  const renderFunc = props.children || props.render;

  return(
    <section className='sticky top-0'>
      <div className='border-b border-b-gray-400'>
        {/*Suspects*/}
        {/*Suspect*/}
        <div className='flex items-center justify-between bg-stone-100 px-4 border-t border-t-gray-400'>
          <div className='w-6/12'>
            <span className='w-full text-left'>
              Jugadores
            </span>
          </div>
          <div className='flex items-center justify-between w-6/12'>
            {props.players.map(renderFunc)}
          </div>
        </div>
      </div>
    </section>
  );
}

export {Players};
