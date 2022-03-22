import React from "react";

function Players() {
  return(
    <div className='flex items-center justify-between'>
      <div className='w-6/12'>{'Jugadores'}</div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        <div className='w-8 h-8 border bg-red-500'><p className=''>{'1'}</p></div>
        <div className='w-8 h-8 border bg-gray-100'><p>{'2'}</p></div>
        <div className='w-8 h-8 border bg-fuchsia-500'><p>{'3'}</p></div>
        <div className='w-8 h-8 border bg-green-500'><p>{'4'}</p></div>
        <div className='w-8 h-8 border bg-blue-500'><p>{'5'}</p></div>
        <div className='w-8 h-8 border bg-yellow-500'><p>{'6'}</p></div>
      </div>
    </div>
  );
}

export {Players};
