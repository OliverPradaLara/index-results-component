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
                            <Nav.Link className="color-orange-one" href="#home"><b>Resultados del índice</b></Nav.Link>
                            <Nav.Link href="#features"><b>Metodología de medición</b></Nav.Link>
                            <Nav.Link href="#pricing"><b>Beneficios de participar</b></Nav.Link>
                            <Nav.Link href="#pricing"><b>Categorías de instituciones</b></Nav.Link>
                        </Nav>
                    </Col>
                </Navbar>
            </Col>
        </Row>
    )
}