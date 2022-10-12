// Página principal de la app
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	// Estado de reloj (relleno del home)
	// const [time, updateTime] = useState(new Date());

	// const timeChange = () => {
	// 	setInterval(updateTime(new Date()),1000)
	// }


	return (
		<div className="container">
			<div className="m-1 d-flex align-items-center">
				<a className="btn btn-warning" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
					<FontAwesomeIcon className="fs-2" icon={ faBars } />
				</a>
				<span className="fs-3 mx-3">Bienvenido, username</span>
			</div>

			<div className="bg-light fs-1 d-flex justify-content-center">
				<span>Se supone que esto es el home</span>
			</div>

			<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  				<div className="offcanvas-header">
    				<h5 className="offcanvas-title" id="offcanvasExampleLabel">Opciones</h5>
    				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  				</div>
  				<div className="offcanvas-body">
				  	<ul className="list-group">
				  		{store.nav_items.map((item, index) => {
							return (
								<li
									key={index}
									className="list-group-item d-flex justify-content-between"
									style={{ background: item.background }}>
									<Link to={"/single/" + index}>
									<span>Link to: {item.title}</span>
									</Link>
								</li>
							);
						})}
				  	</ul>
  				</div>
				<div className="m-5">
					<Link to="/">
						<button className="btn btn-danger fs-5">Log out</button>
					</Link>
				</div>
			</div>
			<br />
		</div>
	);
};
