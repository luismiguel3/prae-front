import React, {useContext} from "react";
import "./styles-menuleft.css";
import { NavLink } from "react-bootstrap";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// components
import ContactModal from "../Contato/Contact";
import BookRegister from "../bookregister/bookRegister";

// icons
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import AboutUs from "@mui/icons-material/Diversity1";
import { Book } from "@mui/icons-material";

//context
import { AuthContext } from "../../context/auth";

export default function MenuLeft() {
  const { user } = useContext(AuthContext);


  return (
    <div className="menu-left">
      <div className="menu-logo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ufsm.br/pro-reitorias/prae/">
          <img src="/prae-logo.png" alt="PRAE" className="prae-logo" />
        </a>
      </div>
      <List>
        <NavLink
          className="menu-left-items"
          onClick={() => {
            window.location.href = "/dashboard";
          }}>
          <ListItem button>
            <MenuBookIcon className="menu-icons" />
            <ListItemText primary="Acervo" className="menu-text" />
          </ListItem>
        </NavLink>

        {
          user?.tipo === 1 ?
            <BookRegister />
          : null
        }
        
        <NavLink
          className="menu-left-items"
          onClick={() => {
            window.location.href = "/solicitacoes";
          }}>
          <ListItem button>
            <LibraryBooksIcon className="menu-icons" />
            <ListItemText primary="Solicitações" className="menu-text" />
          </ListItem>
        </NavLink>
        <ListItem>
          <ContactModal />
        </ListItem>
        <NavLink
          className="menu-left-items"
          onClick={() => {
            window.location.href = "/sobre";
          }}>
          <ListItem button>
            <AboutUs className="menu-icons" />
            <ListItemText primary="Sobre nós" className="menu-text" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}
