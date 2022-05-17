import React from "react";
import { BsXLg } from "react-icons/bs";

function Box(props) {
  return(
    <div className={`${props.color} w-full h-full border-x border-x-gray-400`}>
      <button className={`w-full h-full border-0 flex justify-center items-center`} onClick={() => {props.toggleBox(props.parentId, props.id)}}>
        {(props.boxValue) ? <BsXLg className='text-gray-600 my-1'/> : <span>&nbsp;</span>}
      </button>
    </div>

  );
}

export {Box};
