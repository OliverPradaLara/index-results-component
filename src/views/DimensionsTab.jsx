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
                            <Col md={12}>
                                <div className="p-4 mt-4">
                                    <p className="text-descripcion">{t("tittleDimensions")}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="graphic-acc-3">
                                    <img width="85%" src={Grafico2} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className=" box-dimensions-text">
                            <Col md={4} className="p-5">
                                <Card border="0">
                                    <Card.Body>
                                        <Card.Title className="title-resultado">{t("tittleInstitutionals")}</Card.Title>
                                        <Card.Text className="descripcion-resultado">
                                            {t("dimensionsInstitutionalsText")}
                                        </Card.Text>
                                        <div className="text-center">
                                            <a onClick={() => setView(1)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="p-5">
                                <Card border="0">
                                    <Card.Body>
                                        <Card.Title className="title-resultado">{t("tittleProcess")}</Card.Title>
                                        <Card.Text className="descripcion-resultado">
                                            {t("dimensionsProcessText")}
                                        </Card.Text>
                                        <div className="text-center mb-5">
                                            <a onClick={() => setView(2)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="p-5">
                                <Card border="0" >
                                    <Card.Body >
                                        <Card.Title className="title-resultado">{t("tittleCollaboration")}</Card.Title>
                                        <Card.Text className="descripcion-resultado">
                                            {t("dimensionsCollaborationText")}
                                        </Card.Text>
                                        <div className="text-center">
                                            <a onClick={() => setView(3)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* <Row className="text-center subir">
                            <Col md={5} className="text-center p-5">
                                <a onClick={() => setView(1)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                            </Col>
                            <Col md={3} className="text-center pt-5 pb-5 pl-1 pr-5">
                                <a onClick={() => setView(2)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                            </Col>
                            <Col md={3} className="text-center p-5">
                                <a onClick={() => setView(3)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                            </Col>

                        </Row> */}
                    </>
                )
            }

        </>
    )
}