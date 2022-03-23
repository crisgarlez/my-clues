import React from "react";

function Players(props) {

  const renderFunc = props.children || props.render;

  return(
    <div className='flex items-center justify-between bg-stone-100 pl-4 border-y border-y-gray-400'>
      <div className='w-6/12'>
        <span className='text-lg font-normal font-sans'>
          {'Jugadores'}
        </span>
      </div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        {props.players.map(renderFunc)}
      </div>
    </div>
  );
}

export {Players};
