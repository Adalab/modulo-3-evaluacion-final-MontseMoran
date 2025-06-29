import CharacterCard from "./CharacterCard";
import "../../styles/Characters.scss";

function CharacterList({ pcharacters, isLoading }) {
  if (isLoading) {
    return null;
  }
  if (pcharacters.length === 0) {
    return (
      <h2 className="no-results">
        Vaya!! Personaje no encontrado. Hemos consultado a Dumbledore… y tampoco
        lo conoce!
      </h2>
    );
  }
  return (
    <>
      <ul className="characters-list">
        {pcharacters.map((oneCharacter) => (
          <CharacterCard
            key={oneCharacter.id || oneCharacter.name}
            character={oneCharacter}
          />
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
