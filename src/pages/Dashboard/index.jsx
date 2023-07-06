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
