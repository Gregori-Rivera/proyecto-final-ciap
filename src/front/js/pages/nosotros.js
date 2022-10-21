// Página de Nosotros
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";

export const Nosotros = () => {
  return (
    <div className="flex-column">
      <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/1024/2000/300"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/1071/2000/300"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/1074/2000/300"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      <div style={{textAlign: "center"}}>
        <h1>ACERCA DE NOSOTROS</h1>
        <p>Con más de 10 semanas, el trio Front End, esta haciendo su proyecto final para obtener la certificación</p>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/392/200/150" />
            <Card.Body>
              <Card.Title>Gregori Rivera</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <ListGroup.Item>Academy 4Geeks - CIAP</ListGroup.Item>
              <ListGroup.Item>Caracas</ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/1071/200/150" />
            <Card.Body>
              <Card.Title>Luis Pinto</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <ListGroup.Item>Academy 4Geeks - CIAP</ListGroup.Item>
              <ListGroup.Item>Caracas</ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/1074/200/150" />
            <Card.Body>
              <Card.Title>Sergio Da Silva</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <ListGroup.Item>Academy 4Geeks - CIAP</ListGroup.Item>
              <ListGroup.Item>Puerto La Cruz</ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
        </div>
      </div>
    </div>
  );
};
