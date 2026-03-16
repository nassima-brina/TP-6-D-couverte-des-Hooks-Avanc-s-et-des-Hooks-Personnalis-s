import { useState, useEffect } from "react";

function Timer() {
  const [temps, setTemps] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTemps((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>Durée écoulée : {temps} secondes</p>;
}

export default Timer;