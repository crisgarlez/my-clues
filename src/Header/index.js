import React from "react";

function Header({reset}) {
  return(
    <header className='flex items-center justify-between py-2 px-4 bg-white'>
      <div className='' >
        <span className='font-semibold text-lg tracking-tight font-sans'>MY CLUES</span>
      </div>
      <div>
        <button
          className='inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 lg:mt-0'
          onClick={() => reset()}
        >
          Reiniciar
        </button>
      </div>
    </header>
  );
}

export {Header};
