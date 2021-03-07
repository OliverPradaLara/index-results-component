import React, { useState } from 'react'
import { Accordion, Card, Row, Col, Tab, Tabs } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GeneralTab } from '../components/GeneralTab'
import { DimensionsTab } from '../views/DimensionsTab'

export const ThirdAccordion = () => {
    const [drop, setDrop] = useState(false)
    return (
        <>
            <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5">
                    {
                        drop ? (
                            <>
                                <Col md={10}>
                                    <h1>
                                        <b>Resultados</b>
                                    | Por categorías de instituciones
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
                                            <b>Cantidad de servicios públicos </b>
                                            | Según rango de puntaje total del índice sobre un máximo de 100 puntos.
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
                            A continuación, se presentan los resultados agrupados según categoría de instituciones.
                            Considerar que los resultados entre instituciones sólo son comparables si forman parte de la
                            misma categoría; éstas son: Pilares, Centralizadas o Nuevas.
                                    </p>
                    </Col>
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Tabs className="tabGeneralDimensions" defaultActiveKey="general" id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <GeneralTab />
                        </Tab>
                        <Tab eventKey="dimensions" title="Dimensiones">
                            <DimensionsTab />
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}