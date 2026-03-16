import { useRef } from "react";

function FocusInput() {
  const champRef = useRef(null);

  const donnerFocus = () => {
    if (champRef.current) {
      champRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={champRef} placeholder="Écrire un texte..." />
      <button onClick={donnerFocus}>Activer le curseur</button>
    </div>
  );
}

export default FocusInput;