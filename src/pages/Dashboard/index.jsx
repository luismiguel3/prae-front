import React from "react";

// style
import "./styles-dashboard.css";

// component
import MenuLeft from "./MenuLeft";

import {
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function Dashboard() {
  const livros = [
    {
      id: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      editora: "Rocco",
      ano: 2000,
      genero: "Fantasia",
      capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
    },
    {
      id: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      editora: "Rocco",
      ano: 2000,
      genero: "Fantasia",
      capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
    },
    {
      id: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      editora: "Rocco",
      ano: 2000,
      genero: "Fantasia",
      capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
    },
    {
      id: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      editora: "Rocco",
      ano: 2000,
      genero: "Fantasia",
      capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
    },
    {
      id: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      editora: "Rocco",
      ano: 2000,
      genero: "Fantasia",
      capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
    },
    {
      id: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      editora: "Rocco",
      ano: 2000,
      genero: "Fantasia",
      capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
    },
    {
        id: 1,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        editora: "Rocco",
        ano: 2000,
        genero: "Fantasia",
        capa: "https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg",
      },
      
  ];
    return (
        <div style={{ display: "flex"}}>
            <MenuLeft />
            <div style={{ marginLeft: "10%", marginTop: "10%", marginRight:"5%" }}>
                <Row
                    md={6}
                    className="g-3">
                    {livros.map((livro) => (
                    <Col >
                        <Card>
                        <Card.Img
                            variant="top"
                            src={livro.capa}
                            style={{ height: "auto" }}
                        />
                        <Card.Body>
                            <Card.Text style={{ fontSize: "0.8rem" }}>
                            {livro.titulo}
                            </Card.Text>
                            {<Button variant="primary" style={{TextSize:"10px"}}>Solicitar</Button> 
                            }
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </div>
        </div>
    
  );
}

export default Dashboard;
