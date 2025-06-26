import CharacterCard from "./CharacterCard";

function CharacterList({pcharacters}) {

  return (
  <>
 <ul className="characters-list">
  {pcharacters.map((oneCharacter)=>(
    <CharacterCard
    key={oneCharacter.id || oneCharacter.name}
    character={oneCharacter}
    />
  ))}
 </ul>
  </>
  )
};

export default CharacterList;
