import React from "react";
import "./Search.css";
import { useFilter } from "../../context/filterContext";

const Search = () => {
	const {
		filterState: { search },
		filterDispatch,
	} = useFilter();
	return (
		<div className="search-container">
			<h1>Search properties for rent</h1>
			<div>
				<input
					type="search"
					placeholder="Search with search bar"
					value={search}
					onChange={(e) =>
						filterDispatch({ type: "SEARCH", payload: e.target.value })
					}
				/>
				<span>
					<i className="fa-solid fa-chevron-down"></i>
				</span>
			</div>
		</div>
	);
};

export default Search;
