import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Table, Button } from 'react-bootstrap';
import { Check, X } from 'react-bootstrap-icons';
import { makeStyles } from '@material-ui/core/styles';

// component
import { Input } from "@mui/material";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

// icons
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: '1px solid #dee2e6',
    marginLeft: '5%',
    marginTop: '5%',
    width: '90%',
  },
});

export default function TabelaAdmin() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [books, setBooks] = useState([]);
  const [page, setPage] = React.useState(0);
  const [reload, setReload] = useState(false);
  const [rows, setRows] = useState([]);
  const itemsPerPage = 10; // Quantidade de itens por página
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

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

  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");
      setBooks(response.data.books);
    }
    getBooks();
  }, []);

  useEffect(() => {
    async function getRequests() {
      const response = await api.get("/requests");
      setRequests(response.data.requests);
    }
    getRequests();
  }, [reload]);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get("/users");
      setUsers(response.data.users);
    }
    getUsers();
  }, []);

  useEffect(() => {
    const lowercasedValue = searchText.toLowerCase().trim();
    if (lowercasedValue === '') {
      setRows(requests.filter(request => request.status === 0));
    } else {
      const filteredBooks = books.filter(item => {
        return Object.keys(item).some(key =>
          item[key]?.toString().toLowerCase().includes(lowercasedValue)
        );
      });

      const bookIds = filteredBooks.map(book => book.id);
      const userIds = users.filter(user => user.nome.toLowerCase().includes(lowercasedValue)).map(user => user.id);

      const filteredRequests = requests.filter(request =>
        (bookIds.includes(request.id_livro) && request.status === 0) || userIds.includes(request.id_usuario) && request.status === 0
      );

      setRows(filteredRequests);
    }
  }, [books, requests, searchText]);


  return (
    <>
        <Container fluid >
          <Row className="justify-content-md-center" style={{ marginTop: "6%", marginLeft:"5%"}}>
            <Col className="mx-4">
              <Input
                type="text"
                placeholder="Digite para pesquisar..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
                style={{ width: '60%' }}
              />
              <SearchIcon />
            </Col>
            <Col >
              <div className="pagination">
                {currentPage !== 1 ? (
                  <>
                    <NavigateBeforeIcon className="paginationIconButton" />
                    <Button
                      variant="primary"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="paginationButton"
                    >
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
                      className="paginationButton"
                    >
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
            </Col>
          </Row>
          <Row>
            <Table className={classes.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome do livro</th>
                  <th>Autor</th>
                  <th>Quem solicitou</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {rows
                  .slice(
                    page * itemsPerPage,
                    page * itemsPerPage + itemsPerPage
                  )
                  .map((request, index) =>
                    request.status === 0 ? (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {books.find(book => book.id === request.id_livro)
                            ?.titulo}
                        </td>
                        <td>
                          {books.find(book => book.id === request.id_livro)
                            ?.autor}
                        </td>
                        <td>
                          {users.find(user => user.id === request.id_usuario)
                            ?.nome}
                        </td>
                        <td>
                          <Button
                            variant="success"
                            onClick={() => {
                              if (
                                window.confirm(
                                  'Tem certeza de que deseja aceitar esta solicitação?'
                                )
                              ) {
                                const requestedBook = books.find(book => book.id === request.id_livro);
                                api
                                  .put(`/books/${requestedBook.id}`, {
                                    quantidade: requestedBook.quantidade -1
                                  })
                                api
                                  .put(`/requests/${request.id}`, {
                                    status: 1
                                  })
                                  .then(() => setReload(!reload));
                              }
                            }}
                          >
                            <Check />
                          </Button>{' '}
                          <Button
                            variant="danger"
                            onClick={() => {
                              if (
                                window.confirm(
                                  'Tem certeza de que deseja aceitar esta solicitação?'
                                )
                              )
                                api
                                  .put(`/requests/${request.id}`, {
                                    status: 2,
                                  })
                                  .then(() => setReload(!reload));
                            }}
                          >
                            <X />
                          </Button>
                        </td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </Table>
          </Row>
        </Container>
    </>
  );
}