import React, {useState} from "react";
/*
  Tutti gli Hooks devono iniziare con use
  Il componente in cui uso gli Hooks deve iniziare con una lettera maiuscola
  Gli hooks devono essere chiamati all'initerno del corpo del componente
*/


const UsoBase = () => {
  // const {log} = console;
  // const value = useState()[0];
  // const handler = useState()[1];
  const [title, setTitle] = useState("Hello World!!")
  const changeTitle = () => {
    if(title === "Hello World!!") {
      setTitle("React Magic!"); 
    } 
    else {
      setTitle("Hello World!!"); 
    }
  }
  return (
    <>
      <h2> {title} </h2>
      <button type="button" className="btn btn-info shadow my-3" onClick={changeTitle}>Change me</button>
    </>
  );
};

export default UsoBase;
