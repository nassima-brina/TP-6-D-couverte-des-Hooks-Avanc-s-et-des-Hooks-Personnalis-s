import Compteur from "./Compteur";
import FocusInput from "./FocusInput";
import CompteurRendu from "./CompteurRendu";
import ListeArticles from "./ListeArticles";
import Timer from "./Timer";
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Découverte des Hooks avancés React</h1>

      <section>
        <h2>Gestion d'état avec useReducer</h2>
        <Compteur />
      </section>

      <section>
        <h2>Manipulation du DOM avec useRef</h2>
        <FocusInput />
      </section>

      <section>
        <h2>Compteur de rendu</h2>
        <CompteurRendu />
      </section>

      <section>
        <h2>Récupération de données API</h2>
        <ListeArticles />
      </section>

      <section>
        <h2>Timer React</h2>
        <Timer />
      </section>
    </div>
  );
}

export default App;