import React from "react";
import {Box} from "../Box";

function Room(props) {
  return(
    <div className='flex items-center justify-between bg-stone-100 pl-4 border-t border-t-gray-400'>
      <div className='w-6/12'>
        <button
          className={`w-full text-left ${props.room.marked ? "line-through text-red-500" : ""}`}
          onClick={() => props.toggleRoom(props.room.id)}
        >
          {props.room.name}
        </button>
      </div>
      <div className='flex items-center justify-between w-6/12'>
        {props.room.boxes.map((box) => {
          const id = `${props.room.id}${box.id}`;
          return(
            <Box
              key={id}
              parentId={props.room.id}
              toggleBox={props.toggleRoomBox}
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

export {Room};
