import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filterContext";

const Header = () => {
	const {
		filterState: { favorites },
	} = useFilter();
	return (
		<nav className="nav">
			<div className="nav-left">
				<Link to="/">
					<h1>
						<i className="fa-regular fa-envelope-open"></i>Estatery
					</h1>
				</Link>
				<ul>
					<li className="active">Rent</li>
					<li>Buy</li>
					<li>Sell</li>
					<li>
						Manage Property
						<span>
							<i className="fa-solid fa-chevron-down"></i>
						</span>
					</li>
					<li>
						Resources
						<span>
							<i className="fa-solid fa-chevron-down"></i>
						</span>
					</li>
				</ul>
			</div>
			<div className="nav-right">
				<Link to="/favorite">
					<i className="fa-regular fa-heart"></i>
					{favorites.length ? <span>{favorites.length}</span> : null}
				</Link>
				<button className="btn btn-login">Login</button>
				<button className="btn btn-signup">Sign up</button>
			</div>
		</nav>
	);
};

export default Header;
