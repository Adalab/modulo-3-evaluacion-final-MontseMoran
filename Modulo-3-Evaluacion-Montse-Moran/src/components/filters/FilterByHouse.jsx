function FilterByHouse({ pfilterHouse, psetFilterHouse, phouses }) {
  const handleFilterHouse = (ev) => {
    psetFilterHouse(ev.target.value);
  };

  const handleSubmit = (ev) => ev.preventDefault();
  return (
    <>
      <form className="form-house" onSubmit={handleSubmit}>
        <select
          name="houses"
          id="houses"
          value={pfilterHouse}
          onChange={handleFilterHouse}
        >
          <option value="" disabled hidden>
            Selecciona una casa
          </option>
          <option value="Todas">Todas</option>
          {phouses.map((house, index) => (
            <option key={index} value={house}>
              {house}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
export default FilterByHouse;
