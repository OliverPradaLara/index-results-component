import React, { useState } from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import Fijo1 from "../SVG/img/Fijo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FirstAccordion = () => {
    const [drop, setDrop] = useState(true)
    return (
        <>
            <Accordion.Toggle as={Card.Header} eventKey="2" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5">
                    {
                        drop ? (
                            <>
                                <Col md={10}>
                                    <h1>
                                        <b>Cantidad de servicios públicos </b>
                                                    | Según rango de puntaje total del índice
                                    </h1>
                                </Col>
                                <Col md={2} className="tittleText">
                                    <FontAwesomeIcon icon={["fas", "chevron-down"]} size="4x" color = "#dc712d" />
                                </Col>
                            </>
                        ) :
                            (
                                <>
                                    <Col md={10}>
                                        <h1>
                                            <b>Cantidad de servicios públicos </b>
                                            | Según rango de puntaje total del índice sobre un máximo de 100 puntos.
                                        </h1>
                                    </Col>
                                    <Col md={2} className="tittleText" >
                                        <FontAwesomeIcon icon={["fas", "chevron-up"]} size="4x" color = "#dc712d" />
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
                            Año de referencia 2019 - 37 servicios participantes
                                    </p>
                    </Col>
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div>
                        <img src={Fijo1} alt="gráfico" />
                    </div>
                    <div>
                        <a href="https://www.google.com/?hl=es" className="color-orange-one">+ ver servicios públicos participantes</a>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}