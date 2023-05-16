import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Login() {
    const {register, handleSubmit} = useForm();

    function onSubmit(data) {
        console.log(data);
    }
    
    return (
        <div className="container">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="Email">
                    <Form.Label style={{ 
                        fontWeight: 'bold',
                        fontSize: '1.3REM', 
                        marginBottom: '10px'   
                    }}
                        >Email</Form.Label>
                    <Form.Control className='input' {...register('email')}/>
                </Form.Group>
                <Form.Group controlId="Password" >
                    <Form.Label style={{
                        marginBottom: '10px',
                        marginTop: '20px',
                        fontWeight: 'bold',
                        fontSize: '1.3REM',
                    }} >Password </Form.Label>
                    <Form.Control className='input'  {...register('senha')}/>
                </Form.Group>
                <Button variant="dark" style={{marginTop: '20px'}}>Entrar</Button>
            </Form>
        </div>
    );
}

export default Login;

