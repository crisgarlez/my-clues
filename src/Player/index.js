import React from "react";

function Player({player}) {
  return(
    <div className='w-full h-full border-x border-x-gray-400'>
      <button className={`${player.color} w-full h-full border-0`}>
        <span>
          {player.name}
        </span>
      </button>
    </div>
  );
}

export {Player};
