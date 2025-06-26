import "./App.css";
import CharacterDetail from "./components/characters/CharacterDetail";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Todas");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((item) => ({
          ...item,
          house: item.house === "" ? "sin casa" : item.house,
        }));
        setCharacters(newData);
      });
  }, []);
  const houses = [...new Set(characters.map((item) => item.house))];


  const filteredCharacters = characters
    .filter((item) =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((item) => filterHouse === "Todas" || item.house === filterHouse);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              pfilterName={filterName}
              psetFilterName={setFilterName}
              phouses={houses}
              pfilterHouse={filterHouse}
              psetFilterHouse={setFilterHouse}
              pcharacters={filteredCharacters}
            />
          }
        />

        <Route path="detail/:id" element={<CharacterDetail />} />

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
