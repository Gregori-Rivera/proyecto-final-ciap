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
    puerto: ""
  });
  
  const [formValues, setFormValues] = useState([]);

  const {actions} = useContext(Context)

  const submitForm = (e) => {
    e.preventDefault();
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    // localStorage.setItem('formValues', JSON.stringify(Array.from(formValues.entries())));
    console.log(initialValues);
    actions.deleteBank(initialValues);
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
      <div className="container mx-auto" style={{ maxWidth: 500, height: 'auto' }}>
        <Form>
          <Form.Group className="m-3" controlId="formBasicEliminar">
            <Form.Label>Aba y puerto del registro a eliminar:</Form.Label>
            <Form.Control className="my-2" type="text" placeholder="Ingrese el Aba"  value={initialValues.aba} onChange={(e) => setInitialValues({ ...initialValues, aba: e.target.value })}/>
            <Form.Control className="my-2" type="text" placeholder="Ingrese el Puerto" value={initialValues.puerto} onChange={(e) => setInitialValues({ ...initialValues, puerto: e.target.value })}/>
          </Form.Group>
          <Button className="m-3" variant="primary" type="submit" onClick={submitForm}>
            Eliminar
          </Button>
        </Form>
      </div>
    </div>
  );
}