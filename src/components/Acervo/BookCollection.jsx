import React, { useEffect, useState } from "react";
import api from "../../services/api";

// icons
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';

import {
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

export default function BookCollection() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");
      setBooks(response.data.books);
    }
    getBooks();
  }, []);

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
      <div style={{ marginLeft: "10%", marginTop: "10%", marginRight:"5%" }}>
          <Row
              md={6}
              className="g-3">
              {books.map((livro) => (
              <Col >
                  <Card>
                  {livro.capa !== null ? (
                      <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + "/uploads/" + livro.capa}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : ( 
                      <NoPhotographyIcon style={{width: "100%", height: "100%"}}/>
                  )}
                  <Card.Body>
                      <Card.Text style={{ fontSize: "0.8rem" }}>
                      ID: {livro.id}
                      </Card.Text>
                      <Card.Text style={{ fontSize: "0.8rem" }}>
                      Título: {livro.titulo}
                      </Card.Text>
                      <Card.Text style={{ fontSize: "0.8rem" }}>
                      Autor: {livro.autor}
                      </Card.Text>
                      <Card.Text style={{ fontSize: "0.8rem" }}>
                      Categoria: {livro.categoria}
                      </Card.Text>
                      <Card.Text style={{ fontSize: "0.8rem" }}>
                      Quantidade: {livro.quantidade}
                      </Card.Text>
                      {<Button variant="primary" style={{TextSize:"10px"}}>Solicitar</Button> 
                      }
                  </Card.Body>
                  </Card>
              </Col>
              ))}
          </Row>
      </div>
  );
}