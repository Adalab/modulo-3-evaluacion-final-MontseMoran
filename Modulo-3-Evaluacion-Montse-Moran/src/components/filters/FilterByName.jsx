import "../../styles/Filters.scss"

function FilterByName({ pfilterName, psetFilterName }) {
  const handleFilterName = (ev) => {
    psetFilterName(ev.target.value);
  };

  const handleSubmit = (ev) => ev.preventDefault();

  return (
    <form className="form-name" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filtra por nombre"
        value={pfilterName}
        onChange={handleFilterName}
        className="form-name"
         />
    
    </form>
  );
}

export default FilterByName;
