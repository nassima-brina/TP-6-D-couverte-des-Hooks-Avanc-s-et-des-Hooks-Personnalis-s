import useLocalStorage from './useLocalStorage';

function ExempleLocalStorage() {
  const [nom, setNom] = useLocalStorage("nom", "");

  return (
    <div>
      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Votre nom"
      />
      <p>Nom sauvegardé : {nom}</p>
    </div>
  );
}

export default ExempleLocalStorage;