import React, { useState } from "react";
import styles from "../index.css";

const Search = ({ list, setFilterList }) => {
  const [searchtext, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log("list", list);
    const filterByConferenceName = list.filter(
      (val) =>
        val.confName.toUpperCase().includes(e.target.value.toUpperCase()) ||
        val.city.toUpperCase().includes(e.target.value.toUpperCase())
    );
    console.log("filterByConferenceName", filterByConferenceName);
    setFilterList(filterByConferenceName);
  };
  return (
    <form style={{ display: "flex", justifyContent: "center" }}>
      <input
        style={{
          textAlign: "center",
          width: "280px",
          height: "30px",
          borderRadius: "10px 10px 10px 10px",
        }}
        value={searchtext}
        type="text"
        onChange={handleSearch}
        placeholder="Enter the Conference Name OR the City"
      />
    </form>
  );
};

export default Search;
