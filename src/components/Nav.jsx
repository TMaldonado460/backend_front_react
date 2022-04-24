import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Nav1 = (props) => {

    const el = (localStorage.getItem("role") === "ROLE_ADMIN") ? <>
        <Nav.Link as={Link} to="/odontologos">Odontólogos</Nav.Link>
        {/* <Nav.Link as={Link} to="/pacientes">Pacientes</Nav.Link> */}
    </>: null;



    return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{boxShadow: "0 1px 10px #111", zIndex: "1"}}>
        <Navbar.Brand><Link to="/" className="nav-link">ClinicaDH</Link></Navbar.Brand>
        <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/turnos">Turnos</Nav.Link> */}
            {el}
        </Nav>
    </Navbar>
    )
}

export default Nav1;