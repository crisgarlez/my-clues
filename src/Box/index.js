import React from "react";

function Box(props) {
  return(
    <div className='w-8 h-8 border bg-gray-400'>
      <button className='' onClick={() => {props.toggleBox(props.parentId, props.id)}}>
        {(props.boxValue) ? <span>X</span> : <span>&nbsp;</span>}
      </button>
    </div>

  );
}

export {Box};
