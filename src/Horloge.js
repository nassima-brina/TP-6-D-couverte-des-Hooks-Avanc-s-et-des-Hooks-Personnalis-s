import { useState, useEffect } from 'react';

function Horloge() {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHeure(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Heure actuelle :</h3>
      <p>{heure.toLocaleTimeString()}</p>
    </div>
  );
}

export default Horloge;