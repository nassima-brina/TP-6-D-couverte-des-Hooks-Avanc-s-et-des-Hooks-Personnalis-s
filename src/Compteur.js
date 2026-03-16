import { useReducer } from "react";

const initialState = { valeur: 0 };

function compteurReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { valeur: state.valeur + 1 };
    case "SUB":
      return { valeur: state.valeur - 1 };
    case "RESET":
      return { valeur: 0 };
    default:
      return state;
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(compteurReducer, initialState);

  return (
    <div>
      <h3>Valeur du compteur : {state.valeur}</h3>

      <button onClick={() => dispatch({ type: "ADD" })}>Ajouter</button>
      <button onClick={() => dispatch({ type: "SUB" })}>Retirer</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Réinitialiser</button>
    </div>
  );
}

export default Compteur;