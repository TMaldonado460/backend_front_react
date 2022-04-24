import { ListGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Odontologo from "../components/entity/Odontologo";
import ModalOdontologo from "../components/entity/ModalOdontologo";




const Odontologos = (props) => {
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    const [odontologo, setOdontologo] = useState({id:null, nombre: "", apellido: "", matricula: ""});
    const handleClose = () => {setModal(false); navigate("/odontologos")};
    const handleShow = () => setModal(true);
    const [odontologos, setOdontologos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/odontologos", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then((response) => {
            setOdontologos(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return <>
    {modal?<ModalOdontologo handleClose={handleClose} inputOdontologo={odontologo}/>:null}
    <ListGroup className="list">
        {odontologos.map(odontologo => {
            return <ListGroup.Item as={Odontologo} action {...odontologo} key={odontologo.id} handleUpdate={() => {
                setOdontologo(odontologo);
                handleShow();
            }
            }/>
        })
        }
        <br />
        <br />
        <br />
        <ListGroup.Item as={Button} variant="success" onClick={() => {handleShow(); setOdontologo({id:null});}}>NUEVO</ListGroup.Item>
    </ListGroup>
    </>

}



export default Odontologos;