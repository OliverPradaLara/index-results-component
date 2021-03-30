import React, { useState } from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import Fijo2 from "../SVG/img/Fijo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'
import Grupo1 from "../SVG/img/Grupo1.svg"
import Grupo2 from "../SVG/img/Grupo2.svg"
import Grupo3 from "../SVG/img/Grupo3.svg"
import Grupo4 from "../SVG/img/Grupo4.svg"
import Grupo5 from "../SVG/img/Grupo5.svg"
import Grupo6 from "../SVG/img/Grupo6.svg"
import Grupo7 from "../SVG/img/Grupo7.svg"
import Grupo8 from "../SVG/img/Grupo8.svg"
import Grupo9 from "../SVG/img/Grupo9.svg"
import Grupo10 from "../SVG/img/Grupo10.svg"
import Grupo11 from "../SVG/img/Grupo11.svg"
import Grupo12 from "../SVG/img/Grupo12.svg"
import Grupo13 from "../SVG/img/Grupo13.svg"
import Grupo14 from "../SVG/img/Grupo14.svg"
import Grupo15 from "../SVG/img/Grupo15.svg"
import Grupo16 from "../SVG/img/Grupo16.svg"
import Grupo17 from "../SVG/img/Grupo17.svg"

export const SecondAccordion = () => {
    const [drop, setDrop] = useState(true)
    const { t } = useTranslation();

    return (
        <>
            <Accordion.Toggle className="bg-white borde-bottom" as={Card.Header} eventKey="1" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="accordionView">
                    {drop ? (
                        <>
                            <Col md={10} sm={9} xs={9}>
                                <h1 className="title-acordion">
                                    <b>{t("cadastre_initiatives_of_innovations_developed")}</b>
                                </h1>
                            </Col>
                            <Col md={2} sm={3} xs={3} className="tittleText right size-svg">
                                <FontAwesomeIcon icon={["fas", "chevron-down"]} size="4x" color="#dc712d" />
                            </Col>
                        </>
                    ) :
                        (
                            <>
                                <Col md={10} sm={9} xs={9}>
                                    <h1 className="title-acordion">
                                        <b>{t("cadastre_initiatives_of_innovations_developed")}</b>
                                    </h1>
                                </Col>
                                <Col md={2} sm={3} xs={3} className="tittleText right" >
                                    <FontAwesomeIcon icon={["fas", "chevron-up"]} size="4x" color="#dc712d" />
                                </Col>
                            </>
                        )
                    }
                    <>
                    </>
                </Row>
                <Row className="accordionView">
                    <Col md={12}>
                        <p className="descripcion-carrusel">
                            {t("reference_year_acc_2")}
                        </p>
                    </Col>
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse className="size-box" eventKey="1">
                <>
                    <Row className="accordion2ContainerCollapse pb-4">
                        <Col md={4} className="accordion2Box">
                            <h1 className="accordion2Tittle">130</h1>
                            <h2 className="accordion2SubTittle">{t("innovation_initiatives")}</h2>
                            <p className="accordion2Body">{t("text_acc_2")}</p>
                        </Col>
                        <Col md={8} className="text-center img-tamano">
                            <img src={Fijo2} alt="gráfico" className="fijo2Style" />
                        </Col>
                    </Row>
                    <Row>

                        <h1> acordeon 3 responsivo</h1>
                        <img src={Grupo1} alt="gráfico" className="fijo2Style" />

                        <h1>Dimensiones 1</h1>
                        <img src={Grupo2} alt="gráfico" className="fijo2Style" />
                        <h1> Dimensiones 2</h1>
                        <img src={Grupo3} alt="gráfico" className="fijo2Style" />
                        <h1> Dimensiones 3</h1>
                        <img src={Grupo7} alt="gráfico" className="fijo2Style" />
                        
                        <h1> General 1</h1>
                        <img src={Grupo4} alt="gráfico" className="fijo2Style" />
                        <h1> General 2</h1>
                        <img src={Grupo5} alt="gráfico" className="fijo2Style" />
                        <h1> General 3</h1>
                        <img src={Grupo6} alt="gráfico" className="fijo2Style" />
                        
                        <h1> Talento Humano</h1>
                        <img src={Grupo8} alt="gráfico" className="fijo2Style" />
                        <h1> Marco institucional</h1>
                        <img src={Grupo9} alt="gráfico" className="fijo2Style" />
                        <h1> Recursos digitales</h1>
                        <img src={Grupo10} alt="gráfico" className="fijo2Style" />
                        <h1> Estrategia y gobernanza</h1>
                        <img src={Grupo11} alt="gráfico" className="fijo2Style" />
                        
                        <h1> Actividades o practicas</h1>
                        <img src={Grupo12} alt="gráfico" className="fijo2Style" />
                        <h1> Procedimientos</h1>
                        <img src={Grupo13} alt="gráfico" className="fijo2Style" />
                        <h1> Procesos</h1>
                        <img src={Grupo14} alt="gráfico" className="fijo2Style" />

                        <h1> Participacion de usuarios</h1>
                        <img src={Grupo15} alt="gráfico" className="fijo2Style" />
                        <h1> Coordinacion interinstitucional</h1>
                        <img src={Grupo16} alt="gráfico" className="fijo2Style" />
                        <h1> Gestion del entorno</h1>
                        <img src={Grupo17} alt="gráfico" className="fijo2Style" />
                    </Row>
                </>
            </Accordion.Collapse>
        </>
    )
}