import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';
import { Container, Form, Button, Row, Col, FormGroup, NavLink } from 'react-bootstrap';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string()
        .email('O campo email deve ser um email válido')
        .nonempty('O campo email não pode ser vazio'),
    senha: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
});

function Login() {
    const {register, handleSubmit, 
        formState: { errors}
    } = useForm({
        resolver: zodResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Container fluid className='d-flex align-items-center justify-content-center' style={{height: '100vh'}}>
            <Form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                <Row md={1} className="justify-content-center"  > 
                    <Col md={4}>
                        <Form.Group controlId="Email">
                            <Form.Label style={{ 
                                fontWeight: 'bold',
                                fontSize: '1.3REM', 
                                marginBottom: '10px'   
                            }}
                                >Email</Form.Label>
                            <Form.Control className='input' {...register('email')}/>
                            {errors.email && <span>{errors.email.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row md={1} className="justify-content-center"  >
                    <Col md={4}>
                        <Form.Group controlId="Password" >
                            <Form.Label style={{
                                marginBottom: '10px',
                                marginTop: '20px',
                                fontWeight: 'bold',
                                fontSize: '1.3REM',
                            }} >Senha </Form.Label>
                            <Form.Control className='input'  {...register('senha')}/>
                            {errors.senha && <span>{errors.senha.message}</span>}
                        </Form.Group>
                        <FormGroup className='text-center'>
                            <Button variant="dark" type="submit" size="lg" className='px-5 submit-button'style={{marginTop:'20px'}}>Entrar</Button>
                        </FormGroup>
                        <FormGroup className='d-flex justify-content-between' style={{marginTop:"20px"}} >
                            <NavLink href='/cadastro' style={{color: "#1177BB", marginLeft:"30px", fontSize: "17px"}}>Cadastre-se</NavLink>
                            <NavLink href='/recuperar-senha' style={{color: "#1177BB",fontSize: "17px"}}>Esqueceu a senha?</NavLink>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Login;

