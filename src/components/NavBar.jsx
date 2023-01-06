import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo-plain.png";
import "./Nav.css";

export const NavBar = () => {
    
    return (
      <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className="navbar ">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo} alt="nav brand" className="nav-logo" /></Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="nav-offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Portfolio Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <Nav className="nav nav-links justify-content-center flex-grow-1">
                  <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                  <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                  <Nav.Link href="#training" className="nav-link">Training</Nav.Link>
                  <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
                  <Nav.Link href="#technical" className="nav-link">Skills</Nav.Link>
                  <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
  }