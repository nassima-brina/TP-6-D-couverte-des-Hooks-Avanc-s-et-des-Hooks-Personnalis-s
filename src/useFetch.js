import { useState, useEffect } from "react";

function useFetch(apiUrl) {
  const [resultats, setResultats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function chargerDonnees() {
      try {
        setLoading(true);

        const response = await fetch(apiUrl);
        const json = await response.json();

        setResultats(json);
      } catch (erreur) {
        setErrorMsg(erreur);
      } finally {
        setLoading(false);
      }
    }

    chargerDonnees();
  }, [apiUrl]);

  return { resultats, loading, errorMsg };
}

export default useFetch;