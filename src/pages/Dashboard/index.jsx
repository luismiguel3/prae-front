import React from 'react';
import { useForm } from 'react-hook-form';
import './styles-dashboard.css';
import { Container, Form, Button, Row, Col, FormGroup, NavLink, Card, CardGroup} from 'react-bootstrap';

function Dashboard() {
    
    return (
        <div style={{display:"flex", border:"1px solid red"}}>

            <aside style={{height:"100vh", width:"18vw",border:"1px solid red", justifyContent:"center",alignItems:"center" }}>
                <h1 style={{border:"1px solid black"}}>tem q alinhar no meio</h1>
            </aside>

            <div style={{alignItems:"start" ,marginLeft:"10%", marginTop:"8%"}}>
                <CardGroup style={{width: "50.2vw"}} >
                    <Card> 
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{ height:"auto"}}   />
                        <Card.Body>
                            <Card.Text style={{fontSize:"1rem"}} >Harry Potter e a Pedra Filosofal</Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{marginRight:"2vw"}}></div>
                    <Card> 
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{ height:"auto"}}   />
                        <Card.Body >
                        <Card.Text style={{fontSize:"1rem"}} >Harry Potter e a Pedra Filosofal</Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{marginRight:"2vw"}}></div>
                    <Card> 
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{ height:"auto"}}   />
                        <Card.Body >
                        <Card.Text style={{fontSize:"1rem"}} >Harry Potter e a Pedra Filosofal</Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{marginRight:"2vw"}}></div>
                    <Card> 
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{ height:"auto"}}   />
                        <Card.Body >
                        <Card.Text style={{fontSize:"1rem"}} >Harry Potter e a Pedra Filosofal</Card.Text>
                        </Card.Body>
                    </Card>   
                    <div style={{marginRight:"2vw"}}></div>
                    <Card> 
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{ height:"auto"}}   />
                        <Card.Body >
                        <Card.Text style={{fontSize:"1rem"}} >Harry Potter e a Pedra Filosofal</Card.Text>
                        </Card.Body>
                    </Card>     
                             
                </CardGroup>
            </div>
        </div>
    )

}

export default Dashboard;
