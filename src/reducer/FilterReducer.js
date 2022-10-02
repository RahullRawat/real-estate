export const FilterReducer = (state, action) => {
	switch (action.type) {
		case "FILTER":
			return {
				...state,
				items: action.payload,
			};
		case "LOCATION-INPUT":
			return {
				...state,
				locationInput: action.payload,
			};
		case "SEARCH":
			return {
				...state,
				search: action.payload,
			};
		case "DATE":
			return {
				...state,
				date: action.payload,
			};
		case "PRICE":
			return {
				...state,
				price: action.payload,
			};
		case "PROPERTY-TYPE":
			return {
				...state,
				propertyType: action.payload,
			};
		case "ADD-TO-FAVORITE":
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case "REMOVE-FROM-FAVORITE":
			return {
				...state,
				favorites: [
					...state.favorites.filter((item) => item.id !== action.payload.id),
				],
			};

		default:
			return {
				...state,
			};
	}
};
