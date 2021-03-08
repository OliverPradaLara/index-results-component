import React, { useState } from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import Fijo2 from "../SVG/img/Fijo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SecondAccordion = () => {
    const [drop, setDrop] = useState(true)
    return (
        <>
            <Accordion.Toggle className="bg-white" as={Card.Header} eventKey="1" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5">
                    {
                        drop ? (
                            <>
                                <Col md={10}>
                                    <h1>
                                        <b>Catastro iniciativas de innovaciones desarrolladas</b>
                                    </h1>
                                </Col>
                                <Col md={2} className="tittleText">
                                    <FontAwesomeIcon icon={["fas", "chevron-down"]} size="4x" color="#dc712d" />
                                </Col>
                            </>
                        ) :
                            (
                                <>
                                    <Col md={10}>
                                        <h1>
                                            <b>Catastro iniciativas de innovaciones desarrolladas</b>
                                        </h1>
                                    </Col>
                                    <Col md={2} className="tittleText" >
                                        <FontAwesomeIcon icon={["fas", "chevron-up"]} size="4x" color="#dc712d" />
                                    </Col>
                                </>
                            )
                    }
                    <>
                    </>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Año de referencia 2019 - Servicios participantes
                                    </p>
                    </Col>
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Row>
                        <Col md={4} className="accordion2Box">
                                <h1 className="accordion2Tittle">130</h1>
                                <h2 className="accordion2SubTittle">iniciativas de innovación</h2>
                                <p className="accordion2Body">Desarrolladas por los 37
                                servicios públicos. Cada una de
                                ellas tiene diverso nivel de
                                desarrollo, considerando las
                                etapas de un proceso de
                                innovación pública. De ellas:</p>
                        </Col>
                        <Col md={4}>
                            <img src={Fijo2} alt="gráfico" className="fijo2Style" />
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}