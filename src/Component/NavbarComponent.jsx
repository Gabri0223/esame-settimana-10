import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function MyNavbar() {
  const [city, setCity] = useState("");

  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand className="d-flex align-items-center text-white fs-3">
          <div className="d-flex align-items-center">
            <p className="mb-0 me-1">Meteo</p>
            <i className="bi bi-sun"></i>
          </div>
        </Navbar.Brand>
        <Nav className="ms-auto d-flex flex-row align-items-center">
          <Form>
            <Form.Control
              type="text"
              placeholder="Cerca..."
              className="d-none d-md-inline"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form>
          <Nav.Link href="#home" className="me-3 text-white-50 ps-0">
            <Button
              type="submit"
              className="d-none d-md-inline"
              onClick={() => {
                location.assign(`/dettagli/${city}`);
              }}
            >
              <i className="bi bi-search "></i>
            </Button>
            <i className="bi bi-search d-md-none fs-4"></i>
          </Nav.Link>
          <Nav.Link href="#link" className="me-3 text-white-50">
            <i className="bi bi-gear fs-4"></i>
          </Nav.Link>
          <Nav.Link className="me-3">
            <i className="bi bi-info-circle text-white-50 fs-4"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
