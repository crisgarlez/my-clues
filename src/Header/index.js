import React from "react";

function Header({reset}) {
  return(
    <header className='flex items-center justify-between bg-amber-300'>
      <div>
        My Clues
      </div>
      <div>
        <button onClick={() => reset()}>
          reset
        </button>
      </div>
    </header>
  );
}

export {Header};
