import React, { useState } from 'react'
import { Accordion, Card, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GeneralTab } from '../components/GeneralTab'
import { DimensionsTab } from '../views/DimensionsTab'
import i18next from '../i18n/index'

export const ThirdAccordion = () => {
    const [drop, setDrop] = useState(false)
    const [tabActive, setTabActive] = useState("general")
    const translate = (txt)=>{       
        i18next.t(txt)
    } 

    return (
        <>
            <Accordion.Toggle className="bg-white pl-5 pr-5" as={Card.Header} eventKey="0" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5">
                    {
                        drop ? (
                            <>
                                <Col md={10} >
                                    <h1>
                                        <b>Resultados </b>
                                        <span className="sub-titulo">| Por categorías de instituciones</span>
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
                                            <b>Resultados </b>
                                            <span className="sub-titulo">| Por categorías de instituciones</span>
                                        </h1>
                                        <h4 className="descripcion-carrusel pt-4 pb-4">A continuación, se presentan los resultados agrupados según categoría de instituciones.<br />
                                        Considerar que los resultados entre instituciones sólo son comparables si forman parte de la<br />
                                        misma categoría; éstas son: Pilares, Centralizadas o Nuevas.</h4>
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
            </Accordion.Toggle>

            <Accordion.Collapse className="" eventKey="0">

                <Tab.Container defaultActiveKey="general">
                    <Card>
                            <Nav variant="tabs" className="tabGeneralDimensions">
                                <Nav.Item className="tabHead" onClick={()=>{setTabActive("general")}}>
                                    <Nav.Link eventKey="general" className={tabActive === "general"? "bg-orange-one tabHeadGeneralsActive": "tabHeadGeneral"}>General</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="tabHead" onClick={()=>{setTabActive("dimensions")}}>
                                    <Nav.Link eventKey="dimensions" className={tabActive === "dimensions" ? "bg-orange-one tabHeadDimensionsActive":"tabHeadDimensions"}>{translate('dimensions')}</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        <Card.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey="general">
                                    <GeneralTab />
                                </Tab.Pane>
                                <Tab.Pane eventKey="dimensions">
                                    <DimensionsTab />
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>
                    </Card>
                </Tab.Container>

            </Accordion.Collapse>
        </>
    )
}