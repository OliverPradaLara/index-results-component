import React, { useState } from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import Fijo1 from "../SVG/img/Fijo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'


export const FirstAccordion = () => {
    const [drop, setDrop] = useState(true)
    const { t } = useTranslation();
    return (
        <>
            <Accordion.Toggle className="pl-5 pr-5 borde-bottom" as={Card.Header} eventKey="2" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5 accordionView">
                    {
                        drop ? (
                            <>
                                <Col md={10}>
                                    <h1>
                                        <b>{t("amount_of_utilities")}</b>
                                                    <span className="sub-titulo">{t("according_to_total_score_range_of_the_index")} </span>
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
                                            <b>{t("amount_of_utilities")}</b>
                                            <span className="sub-titulo">{t("according_to_total_score_range_of_the_index100pt")}</span>
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
                <Row className="accordionView" >
                    <Col>
                        <p className="descripcion-carrusel ">
                            {t("reference_year_acc_1")}
                        </p>
                    </Col>
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse className="accordionView pl-5 pr-5 bg-light" eventKey="2" >
                <Card.Body>
                    <div className="text-center p-5">
                        <img width="85%" src={Fijo1} alt="gráfico"  />
                    </div>
                    <div className="text-center pt-4 pb-4">
                        <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("more_info_acc_1")}</a>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}