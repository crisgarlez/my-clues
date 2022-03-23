import React from "react";
import {Box} from "../Box";

function Room(props) {
  return(
    <div className='flex items-center justify-between'>
      <div className='w-6/12'>
        <button className={`${props.room.marked ? "line-through text-red-500" : ""}`} onClick={() => props.toggleRoom(props.room.id)}>
          {props.room.name}
        </button>
      </div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        {props.room.boxes.map((box) => {
          const id = `${props.room.id}${box.id}`;
          return(
            <Box
              key={id}
              parentId={props.room.id}
              toggleBox={props.toggleRoomBox}
              id={box.id}
              boxValue={box.value}
            />
          );
        })}
      </div>
    </div>
  );
}

export {Room};
