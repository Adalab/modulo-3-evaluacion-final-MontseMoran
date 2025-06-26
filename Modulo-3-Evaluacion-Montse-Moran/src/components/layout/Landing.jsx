import FilterByHouse from "../filters/FilterByHouse";
import FilterByName from "../filters/FilterByName";
import CharacterList from "../characters/CharacterList";


function Landing ({pfilterName, psetFilterName, phouses, pfilterHouse, psetFilterHouse, pcharacters}) {
    return (
        <>
        <FilterByName
          pfilterName={pfilterName}
          psetFilterName={psetFilterName}
          />
          <FilterByHouse
          phouses = {phouses}
          pfilterHouse={pfilterHouse}
          psetFilterHouse={psetFilterHouse}
          />
          <CharacterList pcharacters={pcharacters}/>

        </>
    )

}

export default Landing;