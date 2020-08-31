import React, { useState } from "react";

const Search = ({ list, setFilterList }) => {
  const [searchtext, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log("list", list);
    const filterByConferenceName = list.filter((val) =>
      val.confName.toUpperCase().includes(e.target.value.toUpperCase())
    );
    console.log("filterByConferenceName", filterByConferenceName);
    setFilterList(filterByConferenceName);
  };
  return (
    <form style={{ display: "flex", justifyContent: "center" }}>
      <input
        style={{ width: "150px", borderRadius: "10px 0px 0px 10px" }}
        value={searchtext}
        type="text"
        onChange={handleSearch}
      />
      <input
        type="submit"
        value="SEARCH"
        style={{ borderRadius: "0px 10px 10px 0px" }}
      />
    </form>
  );
};

export default Search;
