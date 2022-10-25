// Página para agregar información
import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Agregar = () =>  {

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
      <Link to="/home">
          <span className="btn btn-secondary btn-lg m-3" href="#" role="button">
            <FontAwesomeIcon icon={ faArrowLeft } />
          </span>
      </Link>
      <div className="container mx-auto" style={{ maxWidth: 500, height: 'auto' }}>
        <Form>
          <Form.Group className="m-3" controlId="formBasicAba">
            <Form.Label>Aba</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Aba"  value={initialValues.aba} onChange={(e) => setInitialValues({ ...initialValues, aba: e.target.value })}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicNombreBanco">
            <Form.Label>Nombre de Banco</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Nombre del Banco" value={initialValues.nombreBanco} onChange={(e) => setInitialValues({ ...initialValues, nombreBanco: e.target.value })}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicAmbiente">
            <Form.Label>Ambiente</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Ambiente" value={initialValues.ambiente} onChange={(e) => setInitialValues({ ...initialValues, ambiente: e.target.value })}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicSwitch">
            <Form.Label>Switch</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Switch" value={initialValues.switch} onChange={(e) => setInitialValues({ ...initialValues, switch: e.target.value })}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Producto" value={initialValues.producto} onChange={(e) => setInitialValues({ ...initialValues, producto: e.target.value })}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicPuerto">
            <Form.Label>Puerto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Puerto" value={initialValues.puerto} onChange={(e) => setInitialValues({ ...initialValues, puerto: e.target.value })}/>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicIpBanco">
            <Form.Label>Dirección IP del Banco</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la dirección IP del Banco" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicIpEmpresa">
            <Form.Label>Dirección IP de la Empresa</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la dirección IP de la Empresa" />
          </Form.Group>
          <Button className="m-3" variant="primary" type="submit" onClick={submitForm}>
            Añadir
          </Button>
        </Form>
      </div>
    </div>
  );
}