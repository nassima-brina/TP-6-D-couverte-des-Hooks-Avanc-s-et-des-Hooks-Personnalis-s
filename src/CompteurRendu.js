import { useRef, useEffect } from "react";

function CompteurRendu() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("Nombre de rendus :", renderCount.current);
  });

  return (
    <div>
      <p>Consulte la console pour voir combien de fois le composant s'affiche.</p>
    </div>
  );
}

export default CompteurRendu;