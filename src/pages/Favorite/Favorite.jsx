import React from "react";
import Card from "../../components/Card/Card";
import { useFilter } from "../../context/filterContext";

const Favorite = () => {
	const {
		filterState: { favorites },
	} = useFilter();
	return (
		<div>
			<div className="card-wrapper">
				{favorites.length > 0 ? (
					favorites.map((item) => (
						<div key={item.id}>
							<Card item={item} />
						</div>
					))
				) : (
					<h1>Nothing in Favorites</h1>
				)}
			</div>
		</div>
	);
};

export default Favorite;
