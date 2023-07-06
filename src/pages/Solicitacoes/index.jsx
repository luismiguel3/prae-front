import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

// component
import MenuLeft from "../../components/Menu/MenuLeft";
import Nav from "../../components/Menu/Nav";
import TabelaAdmin from "../../components/Tabelas/TabelaAdmin";
import TabelaUsuario from "../../components/Tabelas/TabelaUsuario";


export default function Solicitacoes() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      <Nav />
      <div style={{ display: "flex" }}>
        <MenuLeft />
        {
          user?.tipo === 1 ?  
            <TabelaAdmin />
          :
            <TabelaUsuario />
        }
        
      </div>

    </>
  );
}