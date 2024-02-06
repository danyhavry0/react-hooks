import React, {useState} from "react";

const StateObject = () => {
  // const [name, setName] = useState("Dario");
  // const [age, setAge] = useState("24");
  // const [saluto, setSaluto] = useState("Ciao");
  const cambiaSaluto = () => {
  //   setSaluto("Ciao ho fatto gli anni");
  //   setAge(25);
  setPerson({
    ...person,
    age: 25,
    saluto: "Ciao ho fatto gli anni",
  })
  }
  const [person, setPerson] = useState({
    name: "Dario", 
    age: 24,
    saluto: "Ciao",
  })
  return(
    <div className="item shadow">
        <div className="text-left">
            <h5>{person.name}</h5>
            <h5>{person.age}</h5> 
            <h5>{person.saluto}</h5> 
        </div>
        <button type="button" onClick={cambiaSaluto}> Change Saluto</button>
    </div>
  )
};

export default StateObject;
