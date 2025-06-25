function CharacterCard({character}){
    const placeholder = "https://placehold.co/300x400?text=No+Image"

    return (
        <li className="character-card">
            <img 
            src={character.image || placeholder} 
            alt={character.name} 
            className= "character-card__img"
            />
            <h3 className="character-card__name">{character.name}</h3>
            <p className="character-card__species">{character.species}</p>
        </li>
    )
}

export default CharacterCard;