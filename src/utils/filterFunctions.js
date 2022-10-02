export const filterByLocation = (items, location) => {
	if (location === "") {
		return items;
	} else {
		return items.filter((prod) =>
			prod.location.includes(location.toLowerCase())
		);
	}
};

export const filterBySearch = (items, search) => {
	if (search === "") {
		return items;
	} else {
		return items.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);
	}
};

export const filterByDate = (items, date) => {
	if (date === "") {
		return items;
	} else {
		let d1 = new Date(date);
		return items.filter(
			(product) => new Date(product.available_from).getTime() > d1.getTime()
		);
	}
};

export const filterByPrice = (items, price) => {
	if (price === "") {
		return items;
	}
	if (price === "$0-$500") {
		return items.filter((product) => Number(product.price) < 500);
	}
	if (price === "$500-$2500") {
		return items.filter(
			(product) => Number(product.price) > 500 && Number(product.price < 2500)
		);
	}
	if (price === "$2500+") {
		return items.filter((product) => Number(product.price > 2500));
	}
};

export const filterByPropertyType = (items, propertyType) => {
	if (propertyType === "") {
		return items;
	}
	if (propertyType) {
		return items.filter(
			(product) => product.type.toLowerCase() === propertyType
		);
	}
};
