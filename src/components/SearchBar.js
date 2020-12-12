import React from "react";
import "../styles/SearchBar.css";
const SearchBar = () => {
	return (
		<div>
			<button>
				<input type="text" name="searchbar" placeholder="Search..." />
			</button>
		</div>
	);
};

export default SearchBar;
