import { useContext, createContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";
import { list } from "../data";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
	const [filterState, filterDispatch] = useReducer(FilterReducer, {
		items: list,
		locationInput: "",
		search: "",
		date: "",
		price: "",
		propertyType: "",
		favorites: [],
	});

	return (
		<FilterContext.Provider value={{ filterState, filterDispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
