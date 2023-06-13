import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './styles-cadastro.css';
import { Container, Form, Button, Row, Col, FormGroup, NavLink } from 'react-bootstrap';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import api from "../../services/api";
import { toast } from "react-toastify";

const schema = z.object({
    email: z.string()
        .email('O campo email deve ser um email válido')
        .nonempty('O campo email não pode ser vazio'),
    senha: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    nome: z.string().nonempty('O campo nome não pode ser vazio'),
    curso: z.string().nonempty('O campo curso não pode ser vazio')
});

function Cadastro() {
    const {register, handleSubmit, 
        formState: { errors}
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (event) => {
        try {
            const data = await api.post("/users/", {
                nome: event.nome,
                curso: event.curso,
                email: event.email,
                senha: event.senha,
                tipo: 3,
            });
            toast.success("Cadastro realizado com sucesso");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao realizar cadastro");
        }
    }

    return (
    <>
        <div className="background-image"></div>
        <div className="login-screen">
            <div className="cadastro-container">
                <Container fluid className='d-flex align-items-center justify-content-center' style={{height: '200vh'}}>
                    <Form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                        <Row className="justify-content-center" > 
                            <Col md={8}>
                                <Form.Group controlId="Nome Completo">
                                    <Form.Label style={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.3REM', 
                                        marginBottom: '10px'   
                                    }}
                                        >Nome Completo</Form.Label>
                                    <Form.Control className='input' style={{marginBottom: "25px"}} {...register('nome')}/>
                                    {errors.nome && <div>{errors.nome.message}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" > 
                            <Col md={8}>
                                <Form.Group controlId="Curso">
                                    <Form.Label style={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.3REM', 
                                        marginBottom: '10px'   
                                    }}
                                        >Curso</Form.Label>
                                    <Form.Control className='input' style={{marginBottom: "25px"}} {...register('curso')}/>
                                    {errors.curso && <div>{errors.curso.message}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center"  > 
                            <Col md={8}>
                                <Form.Group controlId="Email">
                                    <Form.Label style={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.3REM', 
                                        marginBottom: '10px'   
                                    }}
                                        >Email</Form.Label>
                                    <Form.Control className='input' {...register('email')}/>
                                    {errors.email && <div>{errors.email.message}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center"  >
                            <Col md={8}>
                                <Form.Group controlId="Password" >
                                    <Form.Label style={{
                                        marginBottom: '10px',
                                        marginTop: '20px',
                                        fontWeight: 'bold',
                                        fontSize: '1.3REM',
                                    }} >Senha </Form.Label>
                                    <Form.Control className='input'  {...register('senha')}/>
                                    {errors.senha && <div>{errors.senha.message}</div>}
                                </Form.Group>
                                <FormGroup className='text-center'>
                                    <Button variant="dark" type="submit" size="lg" className='px-5 submit-button'style={{marginTop:'20px'}}>Cadastrar</Button>
                                </FormGroup>
                                <FormGroup className='text-buttons' style={{marginTop:"20px", flexWrap: "nowrap"}}>
                                    <div className="button-wrapper">
                                        <NavLink href='/' style={{color: "#1177BB", fontSize: "17px" }}>Voltar a pagina inicial</NavLink>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    </>
    );
}

export default Cadastro;

