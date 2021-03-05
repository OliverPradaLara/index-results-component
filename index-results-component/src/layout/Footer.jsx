import React from 'react';
import "../css/footer/style.css"

// import SGV
import BDI from '../SVG/icons/BID.svg'
import LaboratorioGobierno from '../SVG/icons/laboratorio-gobierno-blanco.svg'
import Ministerio from '../SVG/icons/ministerio-secretaria-blanco.svg'
import indiceInnovacionPublica from '../SVG/icons/indice-innovacion-publica-blanco.svg'


export const Footer = () => {
    return (
        <>
            <div className="contenedor-footer">
                <div className="all-logos">
                    <div className="logo-izquierdo">
                        <div className="banco-interamericano-desarrollo">
                            <img src={BDI} alt="Banco Interamericano de Desarrollo" />
                        </div>
                        <div className="laboratorio-gobierno">
                            <img src={LaboratorioGobierno} alt="Laboratorio de Gobierno" />
                        </div>
                        <div className="ministerio">
                            <img src={Ministerio} alt="Ministerio Secretaria" />
                        </div>
                    </div>
                    <div className="logo-centro">
                        <div className="indice-innovacion-publica">
                            <img src={indiceInnovacionPublica} alt="Indice Innovacion Pública" />
                        </div>
                    </div>
                    <div className="logo-derecho">
                        <div className="twitter">
                            <a><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="instagram">
                            <a><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="in">
                            <a><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="facebook">
                            <a><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
                <div className="links color-orange-one">
                    <ul>
                        <li><a href="http://"><span className='color-orange-one'>ACERCA DEL ÍNDICE DE INNOVACIÓN PÚBLICA</span></a></li>
                        <li><a href="http://"><span className='color-orange-one'>POLÍTICAS DE USO</span></a></li>
                        <li className="decoracion">SI ERES PARTE DE LAS INSTITUCIONES PARTICIPANTES <a href="http://">INGRESA ACÁ</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}