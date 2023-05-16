import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Form } from 'react-bootstrap';

function Login() {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="Email"
                    style={{ 
                        width: '50%',
                        marginBottom: '20px',                        
                    }}>
                    <Form.Label style={{ 
                        width: '50%',
                        fontWeight: 'bold',
                        fontSize: '1.3REM',     
                    }}
                        >Email</Form.Label>
                    <Form.Control type="email" className='input'/>
                </Form.Group>
                <Form.Group controlId="Password" 
                    style={{
                        width: '50%',
                        marginBottom: '20px',
                    }}>
                    <Form.Label style={{
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        fontSize: '1.3REM',
                    }} >Password </Form.Label>
                    <Form.Control type="password" className='input'/>
                </Form.Group>

            </Form>
                
        </div>
    );
}

export default Login;

