import CharacterCard from "./CharacterCard";

function CharacterList({pCharacters}) {

  return (
  <>
 <ul className="characters-list">
  {pCharacters.map((oneCharacter)=>(
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
