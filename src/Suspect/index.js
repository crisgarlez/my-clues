import React from "react";
import {Box} from "../Box";

function Suspect(props) {
return(
    <div className='flex items-center justify-between'>
      <div className='w-6/12'>
        <button className={`${props.suspect.marked ? "line-through text-red-500" : ""}`} onClick={() => props.toggleSuspect(props.suspect.id)}>
          {props.suspect.name}
        </button>
      </div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        {props.suspect.boxes.map((box) => {
          const id = `${props.suspect.id}${box.id}`;
          return(
            <Box
              key={id}
              parentId={props.suspect.id}
              toggleBox={props.toggleSuspectBox}
              id={box.id}
              boxValue={box.value}
            />
          );
        })}
      </div>
    </div>
  );
}

export {Suspect};
