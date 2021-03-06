import React from 'react'

// import SGV
import BDI from '../../SVG/icons/BID.svg'
import LaboratorioGobierno from '../../SVG/icons/laboratorio-gobierno-blanco.svg'
import Ministerio from '../../SVG/icons/ministerio-secretaria-blanco.svg'
import indiceInnovacionPublica from '../../SVG/icons/indice-innovacion-publica-blanco.svg'
import cloud from '../../SVG/img/download.png'
import { Row, Col } from 'react-bootstrap'


export const PieFooter = () => {
    return (
        <>
            <div className="contenedor-footer">
                <Row className="all-logos">
                    <Col md={4} className="logo-izquierdo">
                        <div className="banco-interamericano-desarrollo">
                            <img src={BDI} alt="Banco Interamericano de Desarrollo" />
                        </div>
                        <div className="laboratorio-gobierno">
                            <img src={LaboratorioGobierno} alt="Laboratorio de Gobierno" />
                        </div>
                        <div className="ministerio">
                            <img src={Ministerio} alt="Ministerio Secretaria" />
                        </div>
                    </Col>
                    <Col md={4} className="logo-centro">
                        <div className="indice-innovacion-publica">
                            <img src={indiceInnovacionPublica} alt="Indice Innovacion Pública" />
                        </div>
                    </Col>
                    <Col md={4} className="logo-derecho">
                        <div className="twitter">
                            <a><b><i className="fab fa-twitter"></i></b></a>
                        </div>
                        <div className="instagram">
                            <a><b><i className="fab fa-instagram"></i></b></a>
                        </div>
                        <div className="in">
                            <a><b><i className="fab fa-linkedin-in"></i></b></a>
                        </div>
                        <div className="facebook">
                            <a><b><i className="fab fa-facebook-f"></i></b></a>
                        </div>
                    </Col>
                </Row>
                <Row className="links">
                    <ul>
                        <li><a href="#"><span className='color-orange-one'>ACERCA DEL ÍNDICE DE INNOVACIÓN PÚBLICA</span></a></li>
                        <li><a href="#"><span className='color-orange-one'>POLÍTICAS DE USO</span></a></li>
                        <li className="linksFooter" >SI ERES PARTE DE LAS INSTITUCIONES PARTICIPANTES <a className="color-orange-one" href="#">INGRESA ACÁ</a></li>
                    </ul>
                </Row>
            </div>
        </>
    )
}