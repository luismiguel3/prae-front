import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';

//styles
import "./styles-contact.css";

export default function ContactModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div >
        <ListItem style={{marginTop:"5vh", marginLeft:"10px",justifyContent:"center",color:"white",fontWeight:"bold"}} button onClick={handleShow}>
          <InfoIcon />  
          <ListItemText primary="Contato" style={{marginLeft:"5vh",color:"white",fontWeight:"bold"}}  />
        </ListItem>
      </div>

      <Modal 
        show={show} 
        onHide={handleClose}
        style={{marginTop: "10%"}}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ textAlign: 'center', width: '100%' }}
          >
            Informações de Contato
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Secretaria:</strong> secretariaprae@ufsm.br - 3220-8311
          </p>
          <p>
            <strong>Setor de Atendimento Integral ao Estudante (SATIE):</strong> satie.prae@ufsm.br - 
            3220-9535 | 3220-8264 
          </p>
          <p><strong>Núcleo de Atenção ao Estudante NAE:</strong> nae@ufsm.br </p>
          <InstagramIcon /> <a href="https://www.instagram.com/praeufsm/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}