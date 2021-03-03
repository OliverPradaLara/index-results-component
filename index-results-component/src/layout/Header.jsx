import React from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap'

export const Header = () => {
    return (
        <Row>
            <Col md={12}>
                <Navbar bg="dark" variant="dark">
                    <Col md={3}>
                        <Navbar.Brand href="#home" className="align-left">Laboratorio | índice</Navbar.Brand>
                    </Col>
                    <Col md={4}/>
                    <Col md={5}>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Resultados del índice</Nav.Link>
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