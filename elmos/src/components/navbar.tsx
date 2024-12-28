import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" style={{ width: '100vw' }}>
      <Container className="d-flex justify-content-between">
        <div>
            <Navbar.Brand href="#home">ELMOS</Navbar.Brand> 
        </div>    
        <div>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/records">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </div>         
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
