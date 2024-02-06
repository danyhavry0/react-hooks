import React, { useState } from "react";
import {data} from "../../../data";

const ArrayState = () => {
  const {log} = console;
  const [people, setPeople] = useState(data);
  const remuveItem = (id) => {
    // let newPeople = people.filter(element => element.id !== id);
    setPeople(oldPeople => {
      return oldPeople.filter(el => el.id !== id)
    });
  }
  return (
    <>
      {
        people.map(element => {
          const {id, name} = element;
          return(
            <div key={id} className="item shadow">
              <h5>{name}</h5>
              <button type="button" className="button delete-button" onClick={() => remuveItem(id)}>X</button>
            </div>
          )
        })
      }
    </>
  );
};

export default ArrayState;
