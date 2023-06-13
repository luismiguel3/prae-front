import React from "react";
import "./styles-dashboard.css";
import {
  NavLink,
} from "react-bootstrap";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  );
}
