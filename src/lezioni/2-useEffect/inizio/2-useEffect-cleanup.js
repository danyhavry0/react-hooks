import React, {useState, useEffect} from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth) 

  function setWindow() {
    setSize(window.innerWidth);
  }

  console.log("Render");
  
  useEffect(() => {
    console.log("Setto addEventListener");
    window.addEventListener('resize', setWindow);
    // return () => {
    //   console.log("Rimuovo addEventListener");
    //   window.removeEventListener('resize', setWindow);
    // }
  }, []);

  return (
    <div className="container w-75 col-6 bg-white shadow py-4" style={{textAlign: 'center'}}>
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
