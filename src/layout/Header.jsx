import React, { useState } from 'react';
import { Navbar, Nav, Row, Col, NavDropdown } from 'react-bootstrap';
import indiceInnivacionGris from '../SVG/icons/indice-innovacion-publica-gris.svg'
import laboratorioGobiernoGris from '../SVG/icons/Laboratorio-Gobierno-gris.svg'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const [language, setLanguage] = useState(true)
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar className="pt-4 pb-4" bg="light" variant="light">
                <Row className="row-navbar">
                    <Col md={6}>
                        <Navbar.Brand href="#home" className="align-left">
                            <Row>
                                <Col md={6}>
                                    <img className="img-laboratorio-gobierno" src={laboratorioGobiernoGris} />
                                </Col>
                                <Col md={6}>
                                    <img className="img-indice-innovacion" src={indiceInnivacionGris} />
                                </Col>
                            </Row>
                        </Navbar.Brand>
                    </Col>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Nav className="d-flex justify-content-end">
                            <Nav.Item>
                                <Nav.Link className="color-orange-one text-center text_decoration" href="#home"><b>{t("index_results")}</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-center" href="#features"><b>{t("measurement_methodology")}</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-center" href="#pricing"><b>{t("benefits_of_participating")} </b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-center" href="#category"><b>{t("institution_categories")}</b></Nav.Link>
                            </Nav.Item>
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
                        </Nav>
                    </div>
                </Row>
            </Navbar>

        </>
    )
}