import "./styles/App.scss"
import CharacterDetail from "./components/characters/CharacterDetail";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((item) => ({
          ...item,
          house: item.house === "" ? "sin casa" : item.house,
        }));
        setCharacters(newData);
        setIsLoading(false);
      });
  }, []);
  const houses = [...new Set(characters.map((item) => item.house))];


  const filteredCharacters = characters
    .filter((item) =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter( item => filterHouse === "" || filterHouse === "Todas" ? true
    : item.house === filterHouse);

  return (
    <>
    <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
            <Landing
              pfilterName={filterName}
              psetFilterName={setFilterName}
              phouses={houses}
              pfilterHouse={filterHouse}
              psetFilterHouse={setFilterHouse}
              pcharacters={filteredCharacters}
              isLoading={isLoading}
            />
            </div>
          }
        />

        <Route path="detail/:id" element={<CharacterDetail pcharacterList={characters}/>} />

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
