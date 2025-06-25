function FilterByName({filterName, handleFilterName}){
    return (
        <>
        <input
        type="text"
        placeholder="Filtra por nombre"
        value={filterName}
        onChange={(ev)=> handleFilterName(ev.target.value)}
        />
        </>
    )
}

export default FilterByName;
