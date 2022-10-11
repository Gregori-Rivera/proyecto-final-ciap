import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center" id="img-fondo">
      <div className="user-img">
        <img src="https://picsum.photos/id/323/100/100"></img>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesión</h3>
            <div className="form-group mt-3" id="user-group">
              <label>Usuario</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ingrese Usuario"
              />
            </div>
            <div className="form-group mt-3" id="password-group">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese Contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/demo">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
