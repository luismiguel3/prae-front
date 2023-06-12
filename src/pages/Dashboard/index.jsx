import React from "react";
import { useForm } from "react-hook-form";
import "./styles-dashboard.css";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  NavLink,
  Card,
  CardGroup,
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
            <aside
                style={{
                height: "100vh",
                width: "18vw",
                border: "1px solid red",
                justifyContent: "center",
                alignItems: "center",
                }}>
                <h1
                style={{
                    border: "1px solid black",
                    marginTop: "30vh",
                    fontSize: "2rem",
                }}>
                tem q alinhar no meio
                </h1>
                <div
                style={{
                    border: "1px solid black",
                    fontSize: "2rem",
                    textAlign: "center",
                }}>
                inicio
                </div>
            </aside>
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
