import { useParams, Link } from "react-router-dom";
import "../../styles/Characters.scss";


function CharacterDetail({ pcharacterList }) {
  const { id } = useParams();
if (pcharacterList.length ===0){
    return null;
}
  const detail = pcharacterList.find((item) => item.id === id);

  if (!detail) return <h2>Personaje no encontrado</h2>;

  return (
    <section className="character-detail">
      <img src={detail.image} alt={detail.name} />
      <div className="character-info">
        
        <h2>{detail.name}</h2>
        <p>Specie: {detail.species}</p>
        <p>House: {detail.house}</p>
        <p>State: {detail.alive ? "Vivo" : "Muerto"}</p>
        <p>Gender: {detail.gender}</p>
        <p>Alias: {detail.alternate_names.join(", ") || "Ninguno"}</p>
        <Link to="/">Volver</Link>
      </div>
    </section>
  );
}

export default CharacterDetail;
