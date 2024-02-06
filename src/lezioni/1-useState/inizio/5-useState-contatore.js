import React, {useState} from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  }

  const add = () => {
  //   setCounter(oldValue => {
  //     if(oldValue + 1 === 6) {
  //       return oldValue;
  //     }
  //     return oldValue + 1;
  // })
    setTimeout(() => {
      setCounter(oldValue => {
        return oldValue + 1 
      });
    }, 2000)
  };
  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3">
      <h3>{counter}</h3>
      <div className="d-flex justify-content-between">
        <button className="button my-2" onClick={() => setCounter(counter - 1)}>Diminuisci</button>
        <button className="button my-2" onClick={add}>Aumenta</button>
      </div>
        <button className="button reset-button my2" onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
