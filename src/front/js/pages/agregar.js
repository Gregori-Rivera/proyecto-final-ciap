// Página para agregar información
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Agregar = () =>  {
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
            <Form.Control type="text" placeholder="Ingrese el Aba" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicNombreBanco">
            <Form.Label>Nombre de Banco</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Nombre del Banco" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicAmbiente">
            <Form.Label>Ambiente</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Ambiente" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicSwitch">
            <Form.Label>Switch</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Switch" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Producto" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicPuerto">
            <Form.Label>Puerto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el Puerto" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicIpBanco">
            <Form.Label>Dirección IP del Banco</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la dirección IP del Banco" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicIpEmpresa">
            <Form.Label>Dirección IP de la Empresa</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la dirección IP de la Empresa" />
          </Form.Group>
          <Button className="m-3" variant="primary" type="submit">
            Añadir
          </Button>
        </Form>
      </div>
    </div>
  );
}