import React, { useState } from 'react';
import { Navbar, Nav, Col, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'

//Imagenes
import indiceInnivacionGris from '../../SVG/icons/indice-innovacion-publica-gris.svg'
import laboratorioGobiernoGris from '../../SVG/icons/Laboratorio-Gobierno-gris.svg'

const Header = () => {
    const [language, setLanguage] = useState(true)
    const { t, i18n } = useTranslation();
    return (
        <Navbar expand="lg" collapseOnSelect className="header-nav" bg="withe" variant="light">
            <div className="ub-logo" >
                <div className="navbar-brand">
                    <a className="logo-nav-lab" href="https://lab.gob.cl/" >
                        <img className="img-laboratorio-gobierno" alt="Laboratorio" src={laboratorioGobiernoGris} />
                    </a>
                    <a className="logo-nav-indice" href="http://indice.lab.gob.cl/" >
                        <img  className="img-indice-innovacion" alt="Indice" src={indiceInnivacionGris} />
                    </a>
                </div>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-toggler" />
            <Col md={6} className="d-flex justify-content-end">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                        <Nav.Item>
                            <Nav.Link className="color-orange-one text_decoration nav-item-nav" href="#home"><b>{t("text_Resultados")}<br/>{t("text_Index")}</b></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item-nav" href="http://indice.lab.gob.cl/methodology"><b>{t("text_methodology")}<br/>{t("text_measurement")}</b></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item-nav" href="http://indice.lab.gob.cl/benefits"><b>{t("benefits_of_participating")} </b></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item-nav" href="http://indice.lab.gob.cl/categories"><b>{t("institution_categories")}</b></Nav.Link>
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

        </Navbar>

    )
}

export default Header;