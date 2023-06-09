import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";

// icons
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AuthContext } from "../../context/auth";

//styles
import "./styles-bookColletion.css";

import { Button, Row, Col, Card } from "react-bootstrap";
import { Input } from "@mui/material";
import { toast } from "react-toastify";

export default function BookCollection() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);
  const itemsPerPage = 6; // Quantidade de itens por página
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getBooks() {
      toast.loading("Carregando Livros...");

      const response = await api.get("/books");
      setBooks(response.data.books);

      const requestByUser = await api.get(`/requests/user/${user.id}`);
      const finalBooks = response.data.books.map((book) => {
        const request = requestByUser.data.requests.find(
          (request) => request.id_livro === book.id
        );

        request ? book.solicitado = true : book.solicitado = false;

        return book;
      });
      setBooks(finalBooks);
      toast.dismiss();
    }
    getBooks();
  }, []);

  useEffect(() => {
    const lowercasedValue = searchText.toLowerCase().trim();
    if (lowercasedValue === "") setRows(books);
    else {
      const filteredData = books.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]?.toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setRows(filteredData);
    }
  }, [books, searchText]);

  async function Deleta(livro) {
    console.log(livro)
    try {
      await api.delete(`/books/${livro}`);
      toast.success("Livro deletado com sucesso");
      setBooks((books.filter((book) => book.id !== livro)));
    } catch {
      toast.error("Erro ao deletar livro");
    }
  }

  async function Edita(livro, dados) {
    try {
      const response = await api.put(`/books/${livro.id}`, {
        titulo: dados.titulo,
        autor: dados.autor, 
        capa: dados.capa, 
        categoria: dados.ano,
        quantidade: dados.quantidade
      });
      toast.success("Livro editado com sucesso");
      console.log(response);
    } catch {
      toast.error("Erro ao editar livro");
    }
  }

  async function Solicita(livro) {
    try {
      const response = await api.post("/requests", {
        id_livro: livro.id,
        id_usuario: user.id,
        status: 0,
      });
      toast.success("Livro solicitado com sucesso");
      console.log(response);

      setBooks((prevBooks) => {
        const newBooks = prevBooks.map((book) => {
          if (book.id === livro.id) {
            book.solicitado = true;
          }
          return book;
        });
        return newBooks;
      });
    } catch {
      toast.error("Livro já solicitado");
    }
  }

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
      <div className="container">
        <div className="search">
          <Input
            type="text"
            placeholder="Digite para pesquisar..."
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
          <SearchIcon className="iconSearch" />
          <div className="pagination">
            {currentPage !== 1 ? (
              <>
                <NavigateBeforeIcon className="paginationIconButton" />
                <Button
                  variant="primary"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="paginationButton">
                  Voltar para a página {currentPage - 1}
                </Button>
              </>
            ) : null}

            {currentPage === totalPages ? null : (
              <>
                <Button
                  variant="primary"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="paginationButton">
                  Ir para a página {currentPage + 1} de {totalPages}
                </Button>
                <NavigateNextIcon
                  variant="primary"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="paginationIconButton"
                />
              </>
            )}
          </div>
        </div>
        <Row className="sonContainer">
          {currentRows.map((livro) => (
            <Col className="col" lg={2} key={livro.id}>
              {
                <Card className="card">
                  {livro.capa !== null ? (
                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + "/uploads/" + livro.capa}
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "auto",
                      }}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={
                        "https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg"
                      }
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "auto",
                      }}
                    />
                  )}
                  <Card.Body>
                    <Card.Text>ID: {livro.id}</Card.Text>
                    <Card.Text className="texto-livro">
                      Título: {livro.titulo}
                    </Card.Text>
                    <Card.Text className="texto-livro">
                      Autor: {livro.autor}
                    </Card.Text>
                    <Card.Text className="texto-livro">
                      Categoria: {livro.categoria}
                    </Card.Text>
                    <Card.Text>Quantidade: {livro.quantidade}</Card.Text>

                    {livro.solicitado ? (
                      <Button variant="secondary" color="muted" disabled={true}>
                        Livro solicitado
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={() => Solicita(livro)}>
                        Solicitar
                      </Button>
                    )}
                    {
                      user.tipo === 1 ? (
                        <>
                          <Button 
                            variant="warning" 
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                            onClick={() => {
                              if (window.confirm(
                                  'Tem certeza de que deseja EDITAR esse livro?'
                                )) Edita(livro.id)
                            }}
                          >
                            Editar
                          </Button>
                          <Button 
                            variant="danger" 
                            onClick={() => {
                              if (window.confirm(
                                'Tem certeza de que deseja EXCLUIR esse livro?'
                              )) Deleta(livro.id)
                            }}
                          >
                            Excluir
                          </Button>
                        </>
                      ) : null
                    }

                  </Card.Body>
                </Card>
              }
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
