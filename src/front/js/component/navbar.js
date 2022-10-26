import React from "react";
import { Link } from "react-router-dom";
import logoProvisionalApp from "../../img/logo-provisional-app.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/home">
					<div className="navbar-brand mb-0 h1">
						<img src={logoProvisionalApp} height="65px"/>
					</div>
				</Link>
				<Link to="/nosotros">
                    <button className="btn btn-outline-secondary">Nosotros</button>
                  </Link>
			</div>
		</nav>
	);
};
