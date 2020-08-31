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
      <input value={searchtext} type="text" onChange={handleSearch} />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;

// const filterByRoleName = roleList
//             .filter(val => val.role_name.toUpperCase().includes(e.target.value.toUpperCase()))
//             .map(role => ({ role_name: role.role_name, user_role_id: role.user_role_id }));
