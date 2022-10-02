import React from "react";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";
import { useFilter } from "../../context/filterContext";
import {
	filterByDate,
	filterByLocation,
	filterByPrice,
	filterBySearch,
	filterByPropertyType,
} from "../../utils/filterFunctions";

const Home = () => {
	const {
		filterState: { items, locationInput, search, date, price, propertyType },
	} = useFilter();

	const filterByLocationData = filterByLocation(items, locationInput);
	const filterBySearchData = filterBySearch(filterByLocationData, search);
	const filterByDateData = filterByDate(filterBySearchData, date);
	const filterByPriceData = filterByPrice(filterByDateData, price);
	const filterByPropertyData = filterByPropertyType(
		filterByPriceData,
		propertyType
	);
	return (
		<div className="containr">
			<Search />
			<Filters />
			<div className="card-wrapper">
				{filterByPropertyData.map((item) => {
					return (
						<div key={item.id}>
							<Card item={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
