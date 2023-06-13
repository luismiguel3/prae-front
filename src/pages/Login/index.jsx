import React from "react";
import { useForm } from "react-hook-form";
import "./styles-login.css";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  NavLink,
} from "react-bootstrap";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { toast } from "react-toastify";

const schema = z.object({
  email: z
    .string()
    .email("O campo email deve ser um email válido")
    .nonempty("O campo email não pode ser vazio"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

function Login() {
  const { authenticated, login, logout } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    try {
      await login(data.email, data.senha);
      console.log("Logado com sucesso");
    } catch {
      toast.error("Credenciais inválidas");
      console.log("Erro ao logar");
    }
  }

  return (
    <>
      <div className="background-image"></div>
      <div className="login-screen">
        <div className="login-container">
          <Container
            fluid
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh", width: "300vw" }}>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Form.Group controlId="Email">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.3REM",
                        marginBottom: "10px",
                      }}>
                      Email
                    </Form.Label>
                    <Form.Control className="input" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Form.Group controlId="Password">
                    <Form.Label
                      style={{
                        marginBottom: "10px",
                        marginTop: "20px",
                        fontWeight: "bold",
                        fontSize: "1.3REM",
                      }}>
                      Senha{" "}
                    </Form.Label>
                    <Form.Control className="input" {...register("senha")} />
                    {errors.senha && <span>{errors.senha.message}</span>}
                  </Form.Group>
                  <FormGroup className="text-center">
                    <Button
                      variant="dark"
                      type="submit"
                      size="lg"
                      className="px-5 submit-button"
                      style={{ marginTop: "20px" }}>
                      Entrar
                    </Button>
                  </FormGroup>
                  <FormGroup
                    className="text-buttons"
                    style={{ marginTop: "20px", flexWrap: "nowrap" }}>
                    <div className="button-wrapper">
                      <NavLink
                        href="/cadastro"
                        style={{
                          color: "#1177BB",
                          fontSize: "1REM",
                          marginRight: "50px",
                          marginLeft: "40px",
                        }}>
                        Cadastre-se
                      </NavLink>
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

export default Login;
