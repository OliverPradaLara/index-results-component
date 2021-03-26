import React, { useState } from 'react';
import { Navbar, Nav, Row, Col, NavDropdown, Container } from 'react-bootstrap';
import indiceInnivacionGris from '../SVG/icons/indice-innovacion-publica-gris.svg'
import laboratorioGobiernoGris from '../SVG/icons/Laboratorio-Gobierno-gris.svg'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const [language, setLanguage] = useState(true)
    const { t, i18n } = useTranslation();
    return (
        <Navbar expand="lg" collapseOnSelect className="pt-4 pb-4" bg="light" variant="light">
            <Container className="body-container" fluid>
                <Row className="row-navbar">
                    <Col md={6} sm={2} xs={2} className="ub-logo">
                        <Navbar.Brand href="#home" className="align-left">
                            <Row>
                                <Col md={6}>
                                    <img className="img-laboratorio-gobierno" src={laboratorioGobiernoGris} />
                                </Col>
                                <Col md={6} xs={2}>
                                    <img className="img-indice-innovacion" src={indiceInnivacionGris} />
                                </Col>
                            </Row>
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Col md={6} className="d-flex justify-content-end">
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="d-flex justify-content-end">
                                <Nav.Item>
                                    <Nav.Link className="color-orange-one text-center text_decoration nav-item-nav" href="#home"><b>{t("index_results")}</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-center nav-item-nav" href="#features"><b>{t("measurement_methodology")}</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-center nav-item-nav" href="#pricing"><b>{t("benefits_of_participating")} </b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-center nav-item-nav" href="#category"><b>{t("institution_categories")}</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="center-translation">
                                    <NavDropdown className="color-nav posicion-class" title={language ? `| ESP` : "| ENG"} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(true)
                                            i18n.changeLanguage("es")
                                        }}>{t("spanish")}</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(false)
                                            i18n.changeLanguage("en")
                                        }}>{t("english")}</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>

    )
}