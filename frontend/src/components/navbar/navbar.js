import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Row,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './navbar.css';
import Cookies from 'universal-cookie/es6';
import Logo from '../Logo.png';
const cookies = new Cookies();

//const [show,setShow] = useState(true);
const show = true;
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // React.useEffect(() => {

  // if(sessionStorage.getItem('token')){

  //      setShow(false) }

  //  }, []);

  logout() {
    Swal.fire({
      title: 'Cerrar Sesion',
      text: 'Está seguro(a) que desea salir?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'rgb(88 88, 88)',
      cancelButtonColor: 'rgb(88 88, 77)',
      confirmButtonText: 'Sí',
    }).then((result) => {
      if (result.isConfirmed) {
        cookies.remove('_s');
        window.location.reload();
        Swal.fire('Sesion Cerrada!', 'Gracias por tu visita', 'success');
      }
    });
  }

  mostrar() {
    if (sessionStorage.getItem('token')) {
      show(false);
    }
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" variant="light">
        <Container>
          <h2 className="img-logo"> E-Comerce</h2>
          <Navbar.Brand href="./">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/panel">Editar Productos</Nav.Link>
            </Nav>

            <DropdownButton id="dropdown-basic-button" title="Administrador">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />{' '}
                  {/* <Nav.Link href="/login">Login</Nav.Link> */}{' '}
                </Row>
                <Row>Administrador</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="/productos">Productos</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/panel">Editar Productos</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
