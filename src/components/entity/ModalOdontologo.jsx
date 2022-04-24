import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CustomFormGroup from "../utils/CustomFormGroup";
import axios from "axios";


const ModalOdontologo = ({handleClose, inputOdontologo}) => {
    const [state, setState] = useState(true)
    const handleHide = () => {setState(false); handleClose()}
    const [odontologo, setOdontologo] = useState(inputOdontologo)

    useEffect(() => {
        console.log(odontologo)
        setOdontologo(inputOdontologo)
    }, [inputOdontologo])





    const createOdontologo = () => {
        axios.post("http://localhost:8080/odontologos", odontologo, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then((response) => {
            console.log(response);
            handleHide();
        }).catch((error) => {
            console.log(error);
        });
    }


    const updateOdontologo = () => {
        axios.put(`http://localhost:8080/odontologos`, odontologo, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then((response) => {
            console.log(response);
            handleHide();
        }).catch((error) => {
            console.log(error);
        });
    }




    const handleChange = (e) => {
        setOdontologo({
            ...odontologo,
            [e.target.id]: e.target.value
        })
    }


    return <Modal show={state} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Añadir odontologo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onChange={handleChange}>
            <CustomFormGroup label="nombre" value={odontologo?.nombre}/>
            <CustomFormGroup label="apellido" value={odontologo?.apellido}/>
            <CustomFormGroup label="matricula" value={odontologo?.matricula}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
        <Button variant="primary" onClick={odontologo?.id?updateOdontologo:createOdontologo}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
}

export default ModalOdontologo;