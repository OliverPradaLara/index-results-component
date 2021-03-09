import React from 'react';
import { Navbar, Nav, Row, Col,NavDropdown } from 'react-bootstrap';
import indiceInnivacionGris from '../SVG/icons/indice-innovacion-publica-gris.svg'
import laboratorioGobiernoGris from '../SVG/icons/Laboratorio-Gobierno-gris.svg'

export const Header = () => {
    return (
        <Row>
            <Col md={12}>
                <Navbar bg="light" variant="light">
                    <Col md={4}>
                        <Navbar.Brand href="#home" className="align-left">
                            <Row>
                                <Col md={4}>
                                    <img width="100%" src={laboratorioGobiernoGris} />
                                </Col>
                                <Col md={4}>
                                    <img width="100%" src={indiceInnivacionGris} />
                                </Col>
                            </Row>
                        </Navbar.Brand>
                    </Col>
                    <Col md={3} />
                    <Col md={5}>
                        <Nav className="mr-auto">
                            <Nav.Link className="color-orange-one text-center" href="#home"><b>Resultados del índice</b></Nav.Link>
                            <Nav.Link className="text-center" href="#features"><b>Metodología de medición</b></Nav.Link>
                            <Nav.Link className="text-center" href="#pricing"><b>Beneficios de participar</b></Nav.Link>
                            <Nav.Link className="text-center" href="#pricing"><b>Categorías de instituciones</b></Nav.Link>
                            <NavDropdown title="| ESP" id="basic-nav-dropdown">
                                <NavDropdown.Item  href="#">ESP</NavDropdown.Item>
                                <NavDropdown.Item  href="#">ING</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Navbar>
            </Col>
        </Row>
    )
}