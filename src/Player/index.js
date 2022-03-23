import React from "react";

function Player({player}) {
  return(
    <div className={`w-8 h-8 border ${player.color}`}><p>{player.name}</p></div>
  );
}

export {Player};
