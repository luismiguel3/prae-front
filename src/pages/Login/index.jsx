import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
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
                    {errors.email && <span>{errors.email.message}</span>}
                </Form.Group>
                <Form.Group controlId="Password" >
                    <Form.Label style={{
                        marginBottom: '10px',
                        marginTop: '20px',
                        fontWeight: 'bold',
                        fontSize: '1.3REM',
                    }} >Password </Form.Label>
                    <Form.Control className='input'  {...register('senha')}/>
                    {errors.senha && <span>{errors.senha.message}</span>}
                </Form.Group>
                <Button variant="dark" type="submit" style={{marginTop: '20px'}}>Entrar</Button>
            </Form>
        </div>
    );
}

export default Login;

