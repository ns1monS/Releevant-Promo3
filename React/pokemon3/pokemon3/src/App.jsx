import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonView from "../views/PokemonView/PokemonView";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PokemonView />{" "}
    </div>
  );
}

export default App;
