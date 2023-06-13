import React, { useEffect, useState } from "react";
import api from "../../services/api";

// style
import "./styles-dashboard.css";

// component
import MenuLeft from "../../components/Menu/MenuLeft";
import Nav from "../../components/Menu/Nav";
import BookCollection from "../../components/Acervo/BookCollection";

function Dashboard() {
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
      <>
        <Nav /> 
        <div style={{ display: "flex"}}>
            <MenuLeft />
            <BookCollection />
            
        </div>
      </>
  );
}

export default Dashboard;
