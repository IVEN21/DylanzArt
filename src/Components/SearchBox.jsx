import React from "react";


function SearchBox({ onchange, clickSearch, value }) {

  return (
    <div className="search_container">
      <input
        value={value}
        className="searchbar"
        placeholder="Search here"
        onChange={onchange}
        onKeyPress={clickSearch}
      ></input>
    </div>
  );
}

export default SearchBox;
