import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import rigoImageUrl from "../../img/rigo-baby.jpg";

// const llenadoTabla = () => {
//   // if(!(localStorage.getItem("informacionTabla") === null)){
//   //   let informacionPrevia = new Map(JSON.parse(localStorage.informacionTabla));
//   //   console.log(informacionPrevia);
//   //   let informacionTabla = new Map(JSON.parse(localStorage.formValues));
//   //   let fila1 = Array.from(informacionPrevia.values());
//   //   let fila2 = Array.from(informacionTabla.values());
//   //   let fila = [...fila1,...fila2];
//   //   console.log(fila);
//   //   localStorage.informacionTabla = JSON.stringify(Array.from(fila.entries()));
//   //   return fila;
//   // } else {
//     localStorage.informacionTabla = localStorage.getItem("formValues");
//     let informacionTabla = new Map(JSON.parse(localStorage.informacionTabla));
//     let fila = Array.from(informacionTabla.values());
//     return fila;
//   // }
// }

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [address, setAddress] = useState([]);

  // let registros = [];
  // //lógica para recuperar registros añadidos en la página Agregar
  // for(let i = 0; i < localStorage.length; i++){
  //     registros[i] = JSON.parse(localStorage.getItem("registro"+i));
  //     console.log(registros[i]);
  //   }

    // Relleno de información cualquiera
  //   for(let i = 0; i < 10; i++){
  //   registros[i] = {
  //     aba: "200"+i,
  //     nombreBanco: "banco"+i,
  //     ambiente: "ambiente"+i,
  //     switch: "switch"+i,
  //     producto: "producto"+i,
  //     puerto: "puerto"+i}
  // }

  // // Guardado de la información en el local storage
  // localStorage.informacionTabla = JSON.stringify(Array.from(registros.entries()));
  // useEffect(() => {
  // })

  // localStorage.informacionTabla = localStorage.getItem("formValues");

  // //Recuperando la información del local storage a un objeto Map
  // let informacionTabla = new Map(JSON.parse(localStorage.informacionTabla));

  // //Convirtiendo el objeto Map a un array
  // let fila = Array.from(informacionTabla.values());
  
  // let fila = llenadoTabla();

  useEffect(() => {
    const getToDo = async () => {
      let response = await fetch("https://api.ipify.org?format=json", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      let data = await response.json();
      setAddress(data);
    };
    getToDo();
  }, []);

  return (
    <div className="container mx-auto mb-5">
      <div className="d-flex justify-content-start align-items-center">
        <Link to="/home">
          <span className="btn btn-secondary btn-lg m-3" href="#" role="button">
            <FontAwesomeIcon icon={ faArrowLeft } />
          </span>
        </Link>
        <h5 className="mx-2 fs-2">Mostrar Información</h5>
      </div>
        <div className="container">
          <div className="mx-auto col-sm-8 main-section" id="myTab" role="tablist">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="list"
                role="tabpanel"
                aria-labelledby="list-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h4>Lista de Puertos</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="table-responsive table-wrapper">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Aba</th>
                              <th scope="col">Nombre de Banco</th>
                              <th scope="col">Ambiente</th>
                              <th scope="col">Switch</th>
                              <th scope="col">Producto</th>
                              <th scope="col">Puerto</th>
                              <th scope="col">Dirección IP de Banco</th>
                              <th scope="col">Dirección IP de Empresa</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              store.banks.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.aba}</td>
                                  <td>{item.nombreBanco}</td>
                                  <td>{item.ambiente}</td>
                                  <td>{item.switch}</td>
                                  <td>{item.producto}</td>
                                  <td>{item.puerto}</td>
                                  <td>{address.ip}</td>
                                  <td>{address.ip}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
