import React from "react";
import "./Filters.css";
import { useFilter } from "../../context/filterContext";

const Filters = () => {
	const {
		filterState: { locationInput, date, price, propertyType },
		filterDispatch,
	} = useFilter();

	return (
		<div className="filters-container">
			<div>
				<p>Location</p>
				<input
					type="text"
					placeholder="New York, USA"
					value={locationInput}
					onChange={(e) =>
						filterDispatch({ type: "LOCATION-INPUT", payload: e.target.value })
					}
				/>
			</div>
			<div>
				<p>When</p>
				<input
					type="date"
					value={date}
					onChange={(e) =>
						filterDispatch({ type: "DATE", payload: e.target.value })
					}
				/>
			</div>
			<div>
				<p>Price</p>
				<select
					value={price}
					onChange={(e) =>
						filterDispatch({ type: "PRICE", payload: e.target.value })
					}
				>
					<option value="">Select Prices</option>
					<option value="$0-$500">$0-$500</option>
					<option value="$500-$2500">$500-$2500</option>
					<option value="$2500+">$2500+</option>
				</select>
			</div>
			<div>
				<p>Property Type</p>
				<select
					value={propertyType}
					onChange={(e) =>
						filterDispatch({ type: "PROPERTY-TYPE", payload: e.target.value })
					}
				>
					<option value="">Select property type</option>
					<option value="houses">Houses</option>
					<option value="apartment">Apartment</option>
					<option value="offices">Offices</option>
					<option value="commercial">Commercial</option>
					<option value="condos">Condos</option>
				</select>
			</div>
			<button className="btn btn-signup">Search</button>
		</div>
	);
};

export default Filters;
