import React from "react";

function Players(props) {

  const renderFunc = props.children || props.render;

  return(
    <div className='flex items-center justify-between'>
      <div className='w-6/12'>{'Jugadores'}</div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        {props.players.map(renderFunc)}
      </div>
    </div>
  );
}

export {Players};
