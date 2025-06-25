
import "./App.css";
import Header from "./components/layout/Header";
import FilterByHouse from "./components/filters/FilterByHouse";
import FilterByName from "./components/filters/FilterByName";
import CharacterDetail from "./components/characters/CharacterDetail";
import CharacterList from "./components/characters/CharacterList";
import { useState , useEffect} from "react";
import {Routes, Route} from "react-router-dom"

function App() {

 const [characters, setCharacters]= useState ([])
 const [filterName, setFilterName]= useState("")
 console.log("filterName:", filterName);

 useEffect (()=>{
fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
.then (response => response.json())
.then (data=>{
  setCharacters (data)
})
 }, []);

 const filteredCharacters = characters.filter(item=>item.name.toLowerCase().includes(filterName.toLowerCase()))
  return (
    <>
      <Header/>
      <Routes>
        <Route
        path="/"
        element={
          <>
          <FilterByName
          filterName={filterName}
          handleFilterName={setFilterName}
          />
          <FilterByHouse/>
          <CharacterList pCharacters={filteredCharacters}/>
          </>
        }
        />
      </Routes>

    </>
  );
}

export default App;
