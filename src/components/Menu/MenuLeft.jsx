import React from "react";
import "./styles-menuleft.css";
import {
  NavLink,
} from "react-bootstrap";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';


export default function MenuLeft() {
    return (
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
                      window.location.href = "/dashboard";
                  }}
              >
              <ListItem button>
                  <MenuBookIcon className="menu-icons"/>
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
                  <LibraryBooksIcon className="menu-icons"/>
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
                  <InfoIcon className="menu-icons"/>  
                  <ListItemText primary="Contato" className="menu-text"  />
              </ListItem>
              </NavLink>
          </List>
      </aside>
  );
}
