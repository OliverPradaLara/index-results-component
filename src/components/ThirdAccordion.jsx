import React, { useState } from 'react'
import { Accordion, Card, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GeneralTab } from '../components/GeneralTab'
import { DimensionsTab } from '../views/DimensionsTab'
import { useTranslation } from 'react-i18next'

export const ThirdAccordion = () => {
    const [drop, setDrop] = useState(false)
    const [tabActive, setTabActive] = useState("general")
    const { t } = useTranslation();

    return (
        <>
            <Accordion.Toggle className="bg-white  pl-5 pr-5" as={Card.Header} eventKey="0" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5 borde-top">
                    {
                        drop ? (
                            <>
                                <Col md={10} >
                                    <h1>
                                        <b>{t("results_acc_3")}</b>
                                        <span className="sub-titulo">{t("by_categories_of_institutions")}</span>
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
                                            <b>{t("results_acc_3")}</b>
                                            <span className="sub-titulo">{t("by_categories_of_institutions")}</span>
                                        </h1>
                                        <div className="box-h4">
                                            <h4 className="descripcion-carrusel pt-4 pb-4">{t("acc_3_tittle_1")}</h4>
                                        </div>
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
                            <Nav.Item className="tabHead" onClick={() => { setTabActive("general") }}>
                                <Nav.Link eventKey="general" className={tabActive === "general" ? "bg-orange-one tabHeadGeneralsActive" : "tabHeadGeneral"}>{t("tab1")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabHead" onClick={() => { setTabActive("dimensions") }}>
                                <Nav.Link eventKey="dimensions" className={tabActive === "dimensions" ? "bg-orange-one tabHeadDimensionsActive" : "tabHeadDimensions"}>{t('tab2')}</Nav.Link>
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