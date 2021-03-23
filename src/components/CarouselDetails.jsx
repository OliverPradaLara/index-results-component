import React, { useState } from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import SubRecursos1 from "../SVG/img/Sub-Recursos-01.svg";
import { CarouselResources } from "./CarouselResources"
import { CarouselPractice } from "./CarouselPractice"
import { CarouselCollaboration } from "./CarouselCollaboration"

import Grafico3 from "../SVG/img/Grafico3.svg";

import SubPracticas1 from "../SVG/img/Sub-Practicas-01.svg";
export const CarouselDetails = (props) => {
    const { t } = useTranslation();

    const dimensions = props.dimensions

    const carouselResourcesCodes = [11, 12, 13, 14]
    const carouselPracticeCodes = [21, 22, 23,]
    const carouselCollaborationCodes = [31, 32, 33]

    const [detailView, setDetailView] = useState(dimensions)
    console.log({ detailView })

    const goBack = (dimension) => {
        setDetailView(dimension)
    }

    return (
        <Row>
            <Col md={12}>
                {carouselResourcesCodes.includes(detailView) ? (
                    <CarouselResources subDimensions={detailView} goBack={goBack} />
                ) : carouselPracticeCodes.includes(detailView) ? (
                    <CarouselPractice subDimensions={detailView} goBack={goBack} />
                ) : carouselCollaborationCodes.includes(detailView) ? (
                    <CarouselCollaboration subDimensions={detailView} goBack={goBack} />
                ) : (
                    <Carousel wrap={true} interval={null} defaultActiveIndex={detailView === 1 ? 0 : detailView === 2 ? 1 : detailView === 3 ? 2 : ""} >
                        <Carousel.Item>
                            <Row className="d-flex color-grey justify-content-center">
                                <Col md={10} className>
                                    <div className="text-carrusel">
                                        <h3 className="titulo-carrusel">{t("tittleInstitutionals")}</h3>
                                        <p className="descripcion-carrusel">{t("dimensionsInstitutionalsText")}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="graphic-acc-3">
                                        <img width="85%" src={SubRecursos1} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="interpretation-card">
                                <Col md={4}>
                                    <Card border="0">
                                        <Card.Body className="interpretation-card">
                                            <Card.Title className="title-resultado">{t("title_Human_Talent")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("description_Human_Talent")}
                                            </Card.Text>
                                            <a onClick={() => { setDetailView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="0">
                                        <Card.Body className="interpretation-card">
                                            <Card.Title className="title-resultado">{t("title_Institutional_Frame")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("description_Institutional_Frame")}
                                            </Card.Text>
                                            <a onClick={() => { setDetailView(12) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="0">
                                        <Card.Body className="interpretation-card">
                                            <Card.Title className="title-resultado">{t("title_Digital_Resources")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("description_Digital_Resources")}
                                            </Card.Text>
                                            <a onClick={() => { setDetailView(13) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="0" >
                                        <Card.Body className="interpretation-card">
                                            <Card.Title className="title-resultado">{t("title_Strategy_and_Governability")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("description_Strategy_and_Governability")}
                                            </Card.Text>
                                            <a onClick={() => { setDetailView(14) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center pt-4 pb-4">
                                    <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="d-flex color-grey justify-content-center">
                                <Col md={10} className>
                                    <div className="text-carrusel">
                                        <h3 className="titulo-carrusel">{t("tittleProcess")}</h3>
                                        <p className="descripcion-carrusel">{t("dimensionsProcessText")}</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <div className="graphic-acc-3">
                                        <img width="85%" src={SubPracticas1} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Row className="interpretation-card">

                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="interpretation-card">
                                                <Card.Title className="title-resultado">{t("title_Activities_or_practices")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Activities_or_practices")}
                                                </Card.Text>
                                                <a onClick={() => { setDetailView(21) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="interpretation-card">
                                                <Card.Title className="title-resultado">{t("title_Proceedings")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Proceedings")}
                                                </Card.Text>
                                                <a onClick={() => { setDetailView(22) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0" >
                                            <Card.Body className="interpretation-card">
                                                <Card.Title className="title-resultado">{t("title_Processes")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Processes")}
                                                </Card.Text>
                                                <a onClick={() => { setDetailView(23) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center pt-4 pb-4">
                                    <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="d-flex color-grey justify-content-center">
                                <Col md={10}>
                                    <div className="text-carrusel">
                                        <h3 className="titulo-carrusel">{t("tittleCollaboration")}</h3>
                                        <p className="descripcion-carrusel">{t("dimensionsCollaborationText")} </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="graphic-acc-3">
                                        <img width="85%" src={Grafico3} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Row className="interpretation-card">

                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="interpretation-card">
                                                <Card.Title className="title-resultado">{t("collaborationUserTittle")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("collaborationUserText")}
                                                </Card.Text>
                                                <a onClick={() => { setDetailView(31) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="interpretation-card">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("collaborationCoordinationText")}
                                                </Card.Text>
                                                <a onClick={() => { setDetailView(32) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0" >
                                            <Card.Body className="interpretation-card">
                                                <Card.Title className="title-resultado">{t("collaborationManagmentTittle")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("collaborationManagmentText")}
                                                </Card.Text>
                                                <a onClick={() => { setDetailView(33) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center pt-4 pb-4">
                                    <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>


                )

                }
                {/* <CarouselResources/> */}

            </Col>
        </Row >
    )
}
