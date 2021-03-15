import { React, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico2 from "./../SVG/img/Grafico2.svg";
import { CarouselDetails } from '../components/CarouselDetails'
import { useTranslation } from 'react-i18next'

export const DimensionsTab = (props) => {
    const [view, setView] = useState(0)
    const { t } = useTranslation();
    const back = () => {
        setView(0)
    }

    return (
        <>
            {
                view !== 0 ? (
                    <CarouselDetails dimensions={view} goBack={back} />
                ) : (
                    <>
                        <Row>
                            <Col md={1} />
                            <Col md={10}>
                                <div className="p-4 mt-4">
                                    <p className="text-descripcion">{t("tittleDimensions")}</p>
                                </div>
                            </Col>
                            <Col md={1} />
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="text-center p-5">
                                    <img width="85%" src={Grafico2} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Row className="p-5">

                                <Col md={4}>
                                    <Card border="0">
                                        <Card.Body className="p-5">
                                            <Card.Title className="title-resultado">{t("tittleInstitutionals")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("dimensionsInstitutionalsText")}
                                            </Card.Text>
                                            <a onClick={() => setView(1)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="0">
                                        <Card.Body className="borde p-5">
                                            <Card.Title className="title-resultado">{t("tittleProcess")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("dimensionsProcessText")}
                                            </Card.Text>
                                            <a onClick={() => setView(2)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="0" >
                                        <Card.Body className="p-5">
                                            <Card.Title className="title-resultado">{t("tittleCollaboration")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("dimensionsCollaborationText")}
                                            </Card.Text>
                                            <a onClick={() => setView(3)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")} </a>
                            </Col>
                        </Row>

                    </>
                )
            }

        </>
    )
}