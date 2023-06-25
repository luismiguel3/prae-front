import React, { useEffect, useState } from "react";
import api from "../../services/api";

// icons
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

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
  const itemsPerPage = 6; // Quantidade de itens por página
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  
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
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRows = rows.slice(startIndex, endIndex);

    return (
      <>
        <div style={{ marginLeft: "5%", marginTop: "2%", marginRight:"5%" }}>
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
          <Row className="seven-cols">
            {currentRows.map((livro) => (
              <Col key={livro.id} lg={2} >
                {
                  <Card style={{minHeight: "15rem"}}>
                    {livro.capa !== null ? (
                        <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + "/uploads/" + livro.capa}
                        style={{ width: "100%", minHeight: "14rem",maxHeight: "14rem" }}
                      />
                    ) : ( 
                        <Card.Img
                        variant="top"
                        src={"https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg"}
                        style={{ width: "100%", minHeight: "14rem", maxHeight: "14rem"}}
                      />
                    )}
                    <Card.Body>
                        <Card.Text style={{ fontSize: "0.8rem" }}>
                        ID: {livro.id}
                        </Card.Text>
                        <Card.Text className="texto-livro"  style={{ fontSize: "0.8rem" }}>
                        Título: {livro.titulo}
                        </Card.Text>
                        <Card.Text className="texto-livro"  style={{ fontSize: "0.8rem" }}>
                        Autor: {livro.autor}
                        </Card.Text>
                        <Card.Text className="texto-livro" style={{ fontSize: "0.8rem" }}>
                        Categoria: {livro.categoria}
                        </Card.Text>
                        <Card.Text style={{ fontSize: "0.8rem" }}>
                        Quantidade: {livro.quantidade}
                        </Card.Text>
                        <Button variant="primary" style={{TextSize:"10px"}}>Solicitar</Button> 
                    </Card.Body>
                  </Card>
                }
              </Col>
            ))}
          </Row>

          {
            currentPage !== 1 ? (
              <>
                <NavigateBeforeIcon
                  style={{marginTop: "20px"}}
                />
                <Button
                  variant="primary" 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  style={{ marginRight: "10px", marginTop: "20px" }}
                >
                  Voltar para a página {currentPage-1}
                </Button>
              </>
            ) : null
          }
          
          {
            currentPage === totalPages ? null : (
              <>
                <Button
                  variant="primary"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  style={{ marginLeft: "10px", marginTop: "20px" }}
                >
                  Ir para a página {currentPage+1} de {totalPages}
                </Button>
                <NavigateNextIcon
                  variant="primary"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  style={{marginTop: "20px"}}
                />
              </>
            )
          }
        </div>
      </>
    );
  };