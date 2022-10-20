import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [address, setAddress] = useState([]);

  let registro = [];

  for(let i = 0; i < 10; i++){  
    registro[i] = {
      aba: "200"+i,
      nombreBanco: "banco"+i,
      ambiente: "ambiente"+i,
      switch: "switch"+i,
      producto: "producto"+i,
      puerto: "puerto"+i
    }
  }

  localStorage.setItem("registro1", JSON.stringify(registro[0]));
  localStorage.setItem("registro2", JSON.stringify(registro[1]));
  localStorage.setItem("registro3", JSON.stringify(registro[2]));
  localStorage.setItem("registro4", JSON.stringify(registro[3]));
  localStorage.setItem("registro5", JSON.stringify(registro[4]));
  localStorage.setItem("registro6", JSON.stringify(registro[5]));
  localStorage.setItem("registro7", JSON.stringify(registro[6]));
  localStorage.setItem("registro8", JSON.stringify(registro[7]));
  localStorage.setItem("registro9", JSON.stringify(registro[8]));
  localStorage.setItem("registro10", JSON.stringify(registro[9]));

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
    <div className="jumbotron">
      <body>
        <Link to="/home">
          <span className="btn btn-secondary btn-lg m-3" href="#" role="button">
            <FontAwesomeIcon icon={ faArrowLeft } />
          </span>
        </Link>
        <div class="container">
          <div class="mx-auto col-sm-8 main-section" id="myTab" role="tablist">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="list"
                role="tabpanel"
                aria-labelledby="list-tab"
              >
                <div class="card">
                  <div class="card-header">
                    <h4>Lista de Puertos</h4>
                  </div>
                  <div class="card-body">
                    <div>
                      <div class="table-responsive">
                        <table
                          id="userList"
                          class="table table-bordered table-hover table-striped"
                        >
                          <thead class="thead-light">
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
                            <tr>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th>{address.ip}</th>
                              <th>{address.ip}</th>
                            </tr>
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
      </body>

      
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
