function FilterByHouse({ pfilterHouse, psetFilterHouse, phouses }) {
  
const handleFilterHouse=(ev)=>{
  ev.preventDefault();
  psetFilterHouse(ev.target.value)
}

  
  return (
    <>
      <select
        name=""
        id=""
        value={pfilterHouse}
        onChange={handleFilterHouse}
      >
        <option value="Todas">Todas</option>
        {phouses.map((house, index) => (
          <option key={index} value={house}>
            {house}
          </option>
        ))}
      </select>
    </>
  );

}
export default FilterByHouse;
