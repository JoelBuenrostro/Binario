import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/Logo52.png'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo Binario" />
              Binario
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/cart"><FaShoppingCart /> Carrito</Nav.Link>
                <Nav.Link href="/login"><FaUser /> Inicia Sesion</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header;