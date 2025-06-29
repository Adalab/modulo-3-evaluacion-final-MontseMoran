import FilterByHouse from "../filters/FilterByHouse";
import FilterByName from "../filters/FilterByName";
import CharacterList from "../characters/CharacterList";

function Landing({
  pfilterName,
  psetFilterName,
  phouses,
  pfilterHouse,
  psetFilterHouse,
  pcharacters,
  isLoading,
}) {

  return (
    <>
      <div className="filters">
        <FilterByName
          pfilterName={pfilterName}
          psetFilterName={psetFilterName}
        />
        <FilterByHouse
          phouses={phouses}
          pfilterHouse={pfilterHouse}
          psetFilterHouse={psetFilterHouse}
        />
      </div>
      <CharacterList 
      pcharacters={pcharacters}
      isLoading={isLoading}
      />
    </>
  );
}

export default Landing;
