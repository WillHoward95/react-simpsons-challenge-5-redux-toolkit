const Inputs = (props) => {
  const { onSort, onSearch } = props;
  return (
    <div className="inputs">
      <div className="search">
        <p>Search by character quote or name: </p>
        <input
          type="text"
          name="search"
          id="search"
          onInput={onSearch}
          className="input"
        />
      </div>

      <div className="sort">
        <p>Sort characters alphabetically: </p>
        <select name="sort" id="sort" onChange={onSort} className="input round">
          <option value="empty"></option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
