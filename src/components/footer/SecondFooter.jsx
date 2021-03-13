import React from 'react'

// import SGV
import BDI from '../../SVG/icons/BID.svg'
import LaboratorioGobierno from '../../SVG/icons/laboratorio-gobierno-blanco.svg'
import Ministerio from '../../SVG/icons/ministerio-secretaria-blanco.svg'
import indiceInnovacionPublica from '../../SVG/icons/indice-innovacion-publica-blanco.svg'
import cloud from '../../SVG/img/download.png'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'


export const PieFooter = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="contenedor-footer">
                <Row className="all-logos">
                    <Col md={4} className="logo-izquierdo">
                        <div className="banco-interamericano-desarrollo">
                            <a target="_blank" href="https://www.iadb.org/es">
                                <img src={BDI} alt="Banco Interamericano de Desarrollo" />
                            </a>
                        </div>
                        <div className="laboratorio-gobierno">
                            <a target="_blank" href="http://lab.gob.cl/">
                                <img src={LaboratorioGobierno} alt="Laboratorio de Gobierno" />
                            </a>
                        </div>
                        <div className="ministerio">
                            <a target="_blank" href="https://www.minsegpres.gob.cl/">
                                <img src={Ministerio} alt="Ministerio Secretaria" />
                            </a>
                        </div>
                    </Col>
                    <Col md={4} className="logo-centro">
                        <div className="indice-innovacion-publica">
                            <img src={indiceInnovacionPublica} alt="Indice Innovacion Pública" />
                        </div>
                    </Col>
                    <Col md={4} className="logo-derecho">
                        <div className="twitter">
                            <a className="text-white" target="_blank" href="https://twitter.com/labgobcl"><b><i className="fab fa-twitter"></i></b></a>
                        </div>
                        <div className="instagram">
                            <a className="text-white" target="_blank" href="https://www.instagram.com/labgobcl/" ><b><i className="fab fa-instagram"></i></b></a>
                        </div>
                        <div className="in">
                            <a className="text-white" target="_blank" href="https://www.linkedin.com/company/laboratorio-de-gobierno/" ><b><i className="fab fa-linkedin-in"></i></b></a>
                        </div>
                        <div className="facebook">
                            <a className="text-white" target="_blank" href="https://www.facebook.com/labgobcl" ><b><i className="fab fa-facebook-f"></i></b></a>
                        </div>
                    </Col>
                </Row>
                <Row className="links">
                    <ul>
                        <li><a href="https://indice.lab.gob.cl/about"><span className='color-orange-one'>{t("footer_down_1")}</span></a></li>
                        <li><a href="https://indice.lab.gob.cl/privacy-policies"><span className='color-orange-one'>{t("footer_down_2")}</span></a></li>
                        <li className="linksFooter" >{(t("footer_down_3"))} <a className="color-orange-one" href="https://indice.lab.gob.cl/login">{t("footer_down_4")}</a></li>
                    </ul>
                </Row>
            </div>
        </>
    )
}