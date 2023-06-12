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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
            <aside className="menu-left">
                <div className="menu-logo">
                    <a href="https://www.ufsm.br/pro-reitorias/prae/">
                        <img src="/prae-logo.png" alt="PRAE" className="prae-logo"/>
                    </a>
                </div>
                <List>
                    <NavLink
                        className="menu-left-items"
                        style={{ marginTop: "30%" }}
                        onClick={() => {
                            window.location.href = "/acervo";
                        }}
                    >
                    <ListItem button>
                        <ListItemText primary="Acervo" className="menu-text" />
                    </ListItem>
                    </NavLink>

                    <NavLink
                    className="menu-left-items"
                    onClick={() => {
                        window.location.href = "/solicitacoes";
                    }}
                    >
                    <ListItem button>
                        <ListItemText primary="Solicitações" className="menu-text"  />
                    </ListItem>
                    </NavLink>

                    <NavLink
                    className="menu-left-items"
                    onClick={() => {
                        window.location.href = "/contato";
                    }}
                    >
                    <ListItem button>
                        <ListItemText primary="Contato" className="menu-text"  />
                    </ListItem>
                    </NavLink>
                </List>
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
