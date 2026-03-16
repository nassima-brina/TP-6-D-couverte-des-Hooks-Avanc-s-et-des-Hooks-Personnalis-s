import useFetch from "./useFetch";

function ListeArticles() {
  const { resultats, loading, errorMsg } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Chargement des articles...</p>;
  if (errorMsg) return <p>Une erreur est survenue</p>;

  return (
    <div>
      <h3>Liste des articles</h3>
      <ul>
        {Array.isArray(resultats) &&
          resultats.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default ListeArticles;