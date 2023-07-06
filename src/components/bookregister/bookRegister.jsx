import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { NavLink, Modal, Form, Button } from "react-bootstrap";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import api from "../../services/api";
import { toast } from "react-toastify";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  titulo: z.string().nonempty("O campo título não pode ser vazio"),
  autor: z.string().nonempty("O campo autor não pode ser vazio"),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `tamanho máximo de 5mb.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  categoria: z.string().refine((categoria) => categoria !== "Selecione uma categoria", "O campo categoria não pode ser vazio"),
});

export default function BookRegister(props) {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function Cadastra(data) {
    console.log(data);
    try {
      toast.loading("Cadastrando livro...")
      await api.post("/books", {
        titulo: data.titulo,
        autor: data.autor,
        categoria: data.categoria,
        capa: data.image[0]
      })
      toast.dismiss()
      toast.success("Livro cadastrado com sucesso!")
      
    } catch(error) {
      console.log(error)
      toast.error("Erro ao cadastrar livro!")
    }

  }
  function erroCadastro(data){
    console.log("ERO")
    console.log(data);
  }



  const categoria = [
    "Comédia",
    "Drama",
    "Ficção",
    "Ficção Científica",
    "Romance",
    "Terror",
    "Aventura",
    "Suspense",
    "Infantil",
    "Didático",
    "Biografia",
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "-20px",
        }}>
        <ListItem button onClick={() => setShow(true)}>
          <AddCircleIcon className="menu-icons" />
          <ListItemText primary="Cadastrar" className="menu-text" />
        </ListItem>
      </div>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", width: "100%" }}>
            Cadastrar Livro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(Cadastra,erroCadastro)}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o título do livro"
                {...register("titulo")}
              />
              {errors?.titulo && (
                <Form.Text className="text-danger" >
                  {errors.titulo.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do autor"
                {...register("autor")}
              />
              {errors?.autor && (
                <Form.Text className="text-danger">
                  {errors.autor.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                {...register("image")}
                type="file"
                onChange={(e) => setImage(e.target.files[0])}></Form.Control>
              {errors?.image && (
                <Form.Text className="text-danger">
                  {errors.image.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>

              <Form.Select
                aria-label="Default select example"
                type="text"
                {...register("categoria")}
                >
                <option>Selecione uma categoria</option>
                {categoria.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </Form.Select>
              {errors?.categoria && (
                <Form.Text className="text-danger">
                  {errors.categoria.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
