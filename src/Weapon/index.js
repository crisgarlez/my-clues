import React from "react";
import {Box} from "../Box";

function Weapon({weapon}) {

  const [discarded, setDiscarded] = React.useState(false)

  return(
    <div className='flex items-center justify-between'>
      <div className='w-6/12'>
        <button className={`${discarded ? "line-through text-red-500" : ""}`} onClick={() => setDiscarded(!discarded)}>
          {weapon}
        </button>
      </div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        <div className='w-8 h-8 border bg-red-500'><Box/></div>
        <div className='w-8 h-8 border bg-gray-100'><Box/></div>
        <div className='w-8 h-8 border bg-fuchsia-500'><Box/></div>
        <div className='w-8 h-8 border bg-green-500'><Box/></div>
        <div className='w-8 h-8 border bg-blue-500'><Box/></div>
        <div className='w-8 h-8 border bg-yellow-500'><Box/></div>
      </div>
    </div>
  );
}

export {Weapon};
