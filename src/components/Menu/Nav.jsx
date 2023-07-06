import * as React from 'react';
import { useContext } from 'react'; 
import { AuthContext } from '../../context/auth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

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


function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, logout } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    setAnchorElNav(null);
    logout();
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#004E80' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' }}>
            <Typography variant="body1" sx={{ my: 2, color: 'white', display: 'block' }}>
              {user?.name}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem >
              
             

                <List className="menuMobile">
                <Typography onClick={handleLogout} className="menu-text" textAlign="center">Logout</Typography>
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

              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Typography variant="body1" sx={{ my: 2, color: 'white', display: 'block', marginRight: '50px', marginTop: '20px'}}>
              {
                user?.tipo === 1 ?
                  "Administrador"
                : user?.tipo === 2 ?
                  "Gestor"
                :
                  "Usuário"
              }: {user?.nome}
            </Typography>
            <Button onClick={handleLogout} sx={{ my: 2, color: 'white', display: 'block' }}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;