import React from "react";
import "./Card.css";
import { useFilter } from "../../context/filterContext";

const Card = ({ item }) => {
	const {
		filterState: { items, favorites },
		filterDispatch,
	} = useFilter();

	const favoriteHandler = (id) => {
		const check = favorites.some((prod) => prod.id === id);
		if (check) {
			const res = favorites.find((prod) => prod.id === id);
			filterDispatch({ type: "REMOVE-FROM-FAVORITE", payload: res });
		} else {
			const findItem = items.find((prod) => prod.id === id);
			filterDispatch({ type: "ADD-TO-FAVORITE", payload: findItem });
		}
	};
	return (
		<div className="card-container">
			<img src={item.cover} alt={item} />
			<div className="card-bottom">
				<div className="card-price-container">
					<h2>
						${item.price} <span>/month</span>
					</h2>
					<span>
						<i
							className="fa-regular fa-heart"
							onClick={() => favoriteHandler(item.id)}
						></i>
					</span>
				</div>
				<h1>{item.name}</h1>
				<p>{item.address}</p>
				<div className="card-details">
					<div>
						<i className="fa-solid fa-bed"></i>
						<small>{item.beds} beds</small>
					</div>
					<div>
						<i className="fa-solid fa-bath"></i>
						<small>{item.bathrooms} bathrooms</small>
					</div>
					<div>
						<i className="fa-solid fa-chart-area"></i>
						<small>
							{item.area}m <sup>2</sup>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
