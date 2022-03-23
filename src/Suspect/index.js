import React from "react";
import {Box} from "../Box";

function Suspect(props) {
return(
    <div className='flex items-center justify-between bg-stone-100 pl-4 border-t border-t-gray-400'>
      <div className='w-6/12'>
        <button
          className={`w-full text-left ${props.suspect.marked ? "line-through text-red-500" : ""}`}
          onClick={() => props.toggleSuspect(props.suspect.id)}
        >
          {props.suspect.name}
        </button>
      </div>
      <div className='flex items-center justify-between w-6/12'>
        {props.suspect.boxes.map((box) => {
          const id = `${props.suspect.id}${box.id}`;
          return(
            <Box
              key={id}
              parentId={props.suspect.id}
              toggleBox={props.toggleSuspectBox}
              id={box.id}
              boxValue={box.value}
              color={box.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export {Suspect};
