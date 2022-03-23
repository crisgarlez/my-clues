import React from "react";
import {Box} from "../Box";

function Weapon(props) {
  return(
    <div className='flex items-center justify-between'>
      <div className='w-6/12'>
        <button className={`${props.weapon.marked ? "line-through text-red-500" : ""}`} onClick={() => props.toggleWeapon(props.weapon.id)}>
          {props.weapon.name}
        </button>
      </div>
      <div className='flex items-center justify-between w-6/12 text-center'>
        {props.weapon.boxes.map((box) => {
          const id = `${props.weapon.id}${box.id}`;
          return(
            <Box
              key={id}
              parentId={props.weapon.id}
              toggleBox={props.toggleWeaponBox}
              id={box.id}
              boxValue={box.value}
            />
          );
        })}
      </div>
    </div>
  );
}

export {Weapon};
