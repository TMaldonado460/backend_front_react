import { ListGroup, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";




const Odontologo = ({id, nombre, apellido, matricula, handleUpdate}) => {

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/odontologos/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    

    return <ListGroup horizontal>
                <ListGroup.Item>{id}</ListGroup.Item>
                <ListGroup.Item>{nombre}</ListGroup.Item>
                <ListGroup.Item>{apellido}</ListGroup.Item>
                <ListGroup.Item>{matricula}</ListGroup.Item>
                <ListGroup.Item as={Button} variant="danger" onClick={handleDelete}>BORRAR</ListGroup.Item>
                <ListGroup.Item as={Button} variant="warning" onClick={handleUpdate}>ACTUALIZAR</ListGroup.Item>
            </ListGroup>
}


export default Odontologo;