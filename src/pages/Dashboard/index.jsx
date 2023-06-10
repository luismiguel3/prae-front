import React from 'react';
import { useForm } from 'react-hook-form';
import './styles-dashboard.css';
import { Container, Form, Button, Row, Col, FormGroup, NavLink, Card, CardGroup} from 'react-bootstrap';

function Dashboard() {
    //create cards using bootstrap card with 5 cards on each row

    return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
            <CardGroup style={{width: "50.2vw"}} >
                <Card> 
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{width:"11vw", height:"auto"}}   />
                    <Card.Body >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div style={{marginRight:"2vw"}}></div>
                <Card> 
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{width:"11vw", height:"auto"}}   />
                    <Card.Body >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div style={{marginRight:"2vw"}}></div>
                <Card> 
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{width:"11vw", height:"auto"}}   />
                    <Card.Body >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div style={{marginRight:"2vw"}}></div>
                <Card> 
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg" style={{width:"11vw", height:"auto"}}   />
                    <Card.Body >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>

                

                
            </CardGroup>
        </div>
    )

}

export default Dashboard;
