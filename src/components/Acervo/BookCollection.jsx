import React, { useEffect, useState } from "react";
import api from "../../services/api";

// icons
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import SearchIcon from '@mui/icons-material/Search';

//styles
import "./styles-bookColletion.css";

import {
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Input } from "@mui/material";

export default function BookCollection() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);

  
  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");
      setBooks(response.data.books);
    }
    getBooks();
  }, []);

  useEffect(() => {
    const lowercasedValue = searchText.toLowerCase().trim();
    if (lowercasedValue === '') setRows(books);
    else {
        const filteredData = books.filter((item) => {
            return Object.keys(item).some((key) =>
                item[key]?.toString().toLowerCase().includes(lowercasedValue)
            );
        });
        setRows(filteredData);
    }
}, [books, searchText])
  
  const handleChange = (value) => {
    setSearchText(value);
  };

    return (
      <>
      <div style={{ marginLeft: "10%", marginTop: "10%", marginRight:"5%" }}>
      <div>
        <Input
            className="search-input"
            type="text"
            placeholder="Digite para pesquisar..."
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
        />
        <SearchIcon/>
      </div>
          <Row
              md={6}
              className="g-3">
              {rows.map((livro) => (
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
      </>
  );
}