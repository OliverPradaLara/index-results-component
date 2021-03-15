import React, { useState } from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import Fijo2 from "../SVG/img/Fijo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'

export const SecondAccordion = () => {
    const [drop, setDrop] = useState(true)
    const { t } = useTranslation();

    return (
        <>
            <Accordion.Toggle className="bg-white borde-bottom pl-5 pr-5" as={Card.Header} eventKey="1" onClick={() => {
                drop ? setDrop(false) : setDrop(true)
            }}>

                <Row className="pt-5">
                    {
                        drop ? (
                            <>
                                <Col md={10}>
                                    <h1>
                                        <b>{t("cadastre_initiatives_of_innovations_developed")}</b>
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
                                            <b>{t("cadastre_initiatives_of_innovations_developed")}</b>
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
                        <p className="descripcion-carrusel">
                            {t("reference_year_acc_2")}
                        </p>
                    </Col>
                </Row>
            </Accordion.Toggle>

            <Accordion.Collapse className="pl-5 pr-5" eventKey="1">
                    <Row  className="accordion2ContainerCollapse">
                        <div md={4} className="accordion2Box">
                                <h1 className="accordion2Tittle">130</h1>
                                <h2 className="accordion2SubTittle">{t("innovation_initiatives")}</h2>
                                <p className="accordion2Body">{t("text_acc_2")}</p>
                        </div>
                        <div className="text-center p-5">
                            <img src={Fijo2} alt="gráfico" className="fijo2Style" />
                        </div>
                    </Row>
            </Accordion.Collapse>
        </>
    )
}