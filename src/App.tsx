import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  const all_pokemon = [
    { name: "Charizard", weight: 90 },
    { name: "Bulbasaur", weight: 6.9 },
    { name: "Mewtwo", weight: 122 },
    { name: "Mega beedrill", weight: 65 },
  ];

  all_pokemon.map((p) => console.log(p.weight));
  all_pokemon.map((p) => console.log(p.name + ": " + p.weight + " kg"));

  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <Pokemon
          name="naam"
          weight={1}
          awesome={true}
          terrifying={false}
          abilities={["ab1", "ab2", "ab3"]}
        />
        <Pokemon
          name="naam2"
          weight={1.1}
          awesome={true}
          terrifying={false}
          abilities={["ab11", "ab21", "ab31"]}
        />
      </main>
    </div>
  );
}

export default App;
