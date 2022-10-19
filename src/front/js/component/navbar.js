import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/home">
					<span className="navbar-brand mb-0 h1">Logo de la app</span>
				</Link>
				<Link to="/nosotros">
					<span className="navbar-brand mb-0 h1">Nosotros</span>
				</Link>
			</div>
		</nav>
	);
};
