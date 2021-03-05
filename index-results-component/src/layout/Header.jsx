import React from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import  indiceInnivacionGris  from './../SVG/icons/indice-innovacion-publica-gris.svg'
import  laboratorioGobiernoGris  from './../SVG/icons/Laboratorio-Gobierno-gris.svg'

export const Header = () => {
    return (
        <Row>
            <Col md={12}>
                <Navbar bg="light" variant="light">
                    <Col md={3}>
                        <Navbar.Brand href="#home" className="align-left">
                        <img src = {laboratorioGobiernoGris}/>
                        <img src = {indiceInnivacionGris}/>
                            </Navbar.Brand>
                    </Col>
                    <Col md={4}/>
                    <Col md={5}>
                        <Nav className="mr-auto">
                            <Nav.Link className="color-orange-one" href="#home">Resultados del índice</Nav.Link>
                            <Nav.Link href="#features">Metodología de medición</Nav.Link>
                            <Nav.Link href="#pricing">Beneficios de participar</Nav.Link>
                            <Nav.Link href="#pricing">Categorías de instituciones</Nav.Link>
                        </Nav>
                    </Col>
                </Navbar>
            </Col>
        </Row>
    )
}