function FilterByName({ pfilterName, psetFilterName }) {

  const handleFilterName = (ev) => {
    psetFilterName(ev.target.value);
  };

  return (
    <form>

      <input
        type="text"
        placeholder="Filtra por nombre"
        value={pfilterName}
        onChange={handleFilterName}
      />
   </form>
  );
}

export default FilterByName;
