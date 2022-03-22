import React from "react";

function Box() {

  const [marked, setMarked] = React.useState(false)

  return(
      <button className='' onClick={() => {setMarked(!marked)}}>
        {(marked) ? <span>X</span> : <span>&nbsp;</span>}
      </button>
  );
}

export {Box};
