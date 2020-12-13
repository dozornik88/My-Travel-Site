import React from "react";
import "../styles/SearchBar.css";
const SearchBar = () => {
	return (
		<div className="search-container">
			<input type="text" name="searchbar" placeholder="Search" />
		</div>
	);
};

export default SearchBar;
