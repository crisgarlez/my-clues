import React from "react";

function Box(props) {
  return(
    <div className='w-full h-full border-x border-x-gray-400'>
      <button className={`${props.color} w-full h-full border-0`} onClick={() => {props.toggleBox(props.parentId, props.id)}}>
        {(props.boxValue) ? <span>X</span> : <span>&nbsp;</span>}
      </button>
    </div>

  );
}

export {Box};
