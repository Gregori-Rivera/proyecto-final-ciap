// Página para eliminar información
import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Eliminar = () =>  {

  const [initialValues, setInitialValues] = useState({
    aba: "",
    nombreBanco: "",
    ambiente: "",
    switch: "",
    producto: "",
    puerto: ""
  });
  
  const [formValues, setFormValues] = useState([]);

  const {actions} = useContext(Context)

  const submitForm = (e) => {
    e.preventDefault();
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    // localStorage.setItem('formValues', JSON.stringify(Array.from(formValues.entries())));
    actions.addBank(initialValues);
  };

  return (
    <div className="container mx-auto mb-5">
      <div className="d-flex justify-content-start align-items-center">
        <Link to="/home">
          <span className="btn btn-secondary btn-lg m-3" href="#" role="button">
            <FontAwesomeIcon icon={ faArrowLeft } />
          </span>
        </Link>
        <h5 className="mx-2 fs-2"> Eliminar Información</h5>
      </div>
    </div>
  );
}