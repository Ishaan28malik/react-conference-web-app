import React, { useState } from "react";

const Search = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = e => {
        console.log('e.target.value', e.target.value);
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("");
    };

    const callSearchFunction = e => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    };

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />

            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
};

export default Search;