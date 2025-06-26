import {Link} from "react-router-dom"

function CharacterCard({character}){
    const placeholder = "https://placehold.co/300x400?text=No+Image"

    return (
        <Link to={"detail/"+ character.id}>
         <li className="character-card">
            <img 
            src={character.image || placeholder} 
            alt={character.name} 
            className= "character-card__img"
            />
            <h3 className="character-card__name">{character.name}</h3>
            <p className="character-card__species">{character.species}</p>
        </li>
        </Link>
    )
}

export default CharacterCard;