import React, { useState } from 'react';
import { Navbar, Nav, Row, Col, NavDropdown } from 'react-bootstrap';
import indiceInnivacionGris from '../SVG/icons/indice-innovacion-publica-gris.svg'
import laboratorioGobiernoGris from '../SVG/icons/Laboratorio-Gobierno-gris.svg'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const [language, setLanguage] = useState(true)
    const { t, i18n } = useTranslation();
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
                            <Nav.Link className="color-orange-one text-center" href="#home"><b>{t("index_results")}</b></Nav.Link>
                            <Nav.Link className="text-center" href="#features"><b>{t("measurement_methodology")}</b></Nav.Link>
                            <Nav.Link className="text-center" href="#pricing"><b>{t("benefits_of_participating")} </b></Nav.Link>
                            <Nav.Link className="text-center" href="#pricing"><b>{t("institution_categories")}</b></Nav.Link>
                            <NavDropdown title={language ? "| ESP" : "| ENG"} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => {
                                    setLanguage(true)
                                    i18n.changeLanguage("es")
                                }}>{t("spanish")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {
                                    setLanguage(false)
                                    i18n.changeLanguage("en")
                                }}>{t("english")}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Navbar>
            </Col>
        </Row>
    )
}