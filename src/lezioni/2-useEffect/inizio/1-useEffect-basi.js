import { Button } from "bootstrap";
import React, {useEffect} from "react";

const useEffectBasi = () => {
  console.log("Componente rendering");
  const [value, setValue] = React.useState(0);

  const add  = () => {
    setValue((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    console.log("Eccomi, sono use Effect");
    if (value < 1) {
      document.title = `Nessun Messaggio`;
    } else {
      document.title = `Nuovo Messaggi: ${value}`;
    }
    return () => console.log("clean up function chiamata");
  }, [value]);

  return (
    <div className="item">
      <h4>Value: <span>{value}</span></h4>
      <button className="button" onClick={add}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
