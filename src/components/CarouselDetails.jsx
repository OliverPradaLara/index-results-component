import React, { useState } from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import SubRecursos1 from "../SVG/img/Sub-Recursos-01.svg";
import { FirstResourcesAnalysis } from "./FirstResourcesAnalysis";
import { SecondResourcesAnalysis } from "./SecondResourcesAnalysis";
import { ThirdResourcesAnalysis } from "./ThirdResourcesAnalysis";
import { FourthResourcesAnalysis } from "./FourthResourcesAnalysis";

import Grafico3 from "../SVG/img/Grafico3.svg";
import { FirstCollaborationAnalysis } from "./FirstCollaborationAnalysis";
import { SecondCollaborationAnalysis } from "./SecondCollaborationAnalysis";
import { ThirdCollaborationAnalysis } from "./ThirdCollaborationAnalysis";

import SubPracticas1 from "../SVG/img/Sub-Practicas-01.svg";
import { FirstPracticeAnalysis } from "./FirstPracticeAnalysis";
import { SecondPracticeAnalysis } from "./SecondPracticeAnalysis";
import { ThirdPracticeAnalysis } from "./ThirdPracticeAnalysis";

export const CarouselDetails = (detail) => {
    const { t } = useTranslation();
    let received = detail.detail
    const [detailView, setDataView] = useState(received)
    console.log({detailView})
    console.log()

    return (
        <Row>
            <Col md={12}>
                {
                    detailView === 1 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleInstitutionals")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsInstitutionalsText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={SubRecursos1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Human_Talent")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Human_Talent")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Institutional_Frame")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Institutional_Frame")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(12) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Digital_Resources")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Digital_Resources")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(13) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0" >
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Strategy_and_Governability")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Strategy_and_Governability")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleProcess")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsProcessText")}</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={SubPracticas1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>

                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Activities_or_practices")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Activities_or_practices")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(21) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Proceedings")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Proceedings")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(22) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0" >
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Processes")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Processes")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(23) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10}>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleCollaboration")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsCollaborationText")} </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={Grafico3} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>

                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("collaborationUserTittle")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationUserText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(31) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">
                                                        {t("collaborationCoordinationTittle")}
                                                    </Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationCoordinationText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(32) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0" >
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("collaborationManagmentTittle")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationManagmentText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(33) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                    ) : detailView === 2 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleProcess")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsProcessText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={SubPracticas1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>

                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Activities_or_practices")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Activities_or_practices")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(21) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Proceedings")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Proceedings")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(22) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0" >
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Processes")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Processes")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(23) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10}>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleCollaboration")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsCollaborationText")} </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={Grafico3} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>

                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("collaborationUserTittle")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationUserText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(31) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">
                                                        {t("collaborationCoordinationTittle")}
                                                    </Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationCoordinationText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(32) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0" >
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("collaborationManagmentTittle")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationManagmentText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(33) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleInstitutionals")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsInstitutionalsText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={SubRecursos1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Human_Talent")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Human_Talent")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Institutional_Frame")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Institutional_Frame")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(12) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Digital_Resources")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Digital_Resources")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(13) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0" >
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Strategy_and_Governability")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Strategy_and_Governability")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                        </Carousel>
                    ) : detailView === 3 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10}>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleCollaboration")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsCollaborationText")} </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={Grafico3} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>

                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("collaborationUserTittle")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationUserText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(31) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">
                                                        {t("collaborationCoordinationTittle")}
                                                    </Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationCoordinationText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(32) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0" >
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("collaborationManagmentTittle")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("collaborationManagmentText")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(33) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleInstitutionals")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsInstitutionalsText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={SubRecursos1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Human_Talent")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Human_Talent")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Institutional_Frame")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Institutional_Frame")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(12) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Digital_Resources")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Digital_Resources")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(13) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card border="0" >
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-resultado">{t("title_Strategy_and_Governability")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Strategy_and_Governability")}
                                                </Card.Text>
                                                <a onClick={() => { setDataView(11) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("tittleProcess")}</h3>
                                            <p className="descripcion-carrusel">{t("dimensionsProcessText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="p-5">
                                            <p className="text-descripcion">{t("tittleDimensions")}</p>
                                        </div>
                                        <div className="text-center p-5">
                                            <img width="85%" src={SubPracticas1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>

                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Activities_or_practices")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Activities_or_practices")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(21) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0">
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Proceedings")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Proceedings")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(22) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card border="0" >
                                                <Card.Body className="p-5">
                                                    <Card.Title className="title-resultado">{t("title_Processes")}</Card.Title>
                                                    <Card.Text className="descripcion-resultado">
                                                        {t("description_Processes")}
                                                    </Card.Text>
                                                    <a onClick={() => { setDataView(23) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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
                    ) : detailView === 11 ? (
                        /////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////
                        /////////////////////////////ANALYSIS////////////////////////////////
                        /////////////////////////////ANALYSIS////////////////////////////////
                        /////////////////////////////ANALYSIS////////////////////////////////
                        /////////////////////////////ANALYSIS////////////////////////////////
                        /////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////

                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_HUMAN_TALENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_INSTITUTIONAL_FRAME_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Institutional_Frame")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_DIGITAL_RESOURCES_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Digital_Resources")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Strategy_and_Governability")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FourthResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>

                    ) : detailView === 12 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_INSTITUTIONAL_FRAME_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Institutional_Frame")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_DIGITAL_RESOURCES_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Digital_Resources")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Strategy_and_Governability")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FourthResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_HUMAN_TALENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    ) : detailView === 13 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_DIGITAL_RESOURCES_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Digital_Resources")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Strategy_and_Governability")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FourthResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_HUMAN_TALENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_INSTITUTIONAL_FRAME_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Institutional_Frame")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    ) : detailView === 14 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                            <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Strategy_and_Governability")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FourthResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_HUMAN_TALENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_INSTITUTIONAL_FRAME_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Institutional_Frame")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_DIGITAL_RESOURCES_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Digital_Resources")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdResourcesAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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

                        </Carousel>
                    ) : detailView === 21 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ACTIVITIES_OR_PRACTICES")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Activities_or_practices")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
            </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_PROCEEDINGS")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Proceedings")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_PROCESS_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Processes")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>

                    ) : detailView === 22 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_PROCEEDINGS")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Proceedings")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_PROCESS_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Processes")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                            <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ACTIVITIES_OR_PRACTICES")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Activities_or_practices")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
            </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    ) : detailView === 23 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_PROCESS_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Processes")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ACTIVITIES_OR_PRACTICES")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Activities_or_practices")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
            </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_PROCEEDINGS")}</h3>
                                            <p className="descripcion-carrusel">{t("description_Proceedings")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondPracticeAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    ) : detailView === 31 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_USER_PARTICIPATION_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
            </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_COORDINATION_BETWEEN_INSTITUTIONS_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationCoordinationText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ENVIRONMENT_MANAGEMENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationManagmentText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    ) : detailView === 32 ? (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_COORDINATION_BETWEEN_INSTITUTIONS_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationCoordinationText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ENVIRONMENT_MANAGEMENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationManagmentText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_USER_PARTICIPATION_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
            </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    ) : (
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_SUBDIMENSION_ENVIRONMENT_MANAGEMENT")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationManagmentText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <ThirdCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_USER_PARTICIPATION_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationUserText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <FirstCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
            </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                <Row className="d-flex justify-content-center">
                                    <Col md={10} className>
                                        <div className="text-carrusel">
                                            <h3 className="titulo-carrusel">{t("title_COORDINATION_BETWEEN_INSTITUTIONS_SUBDIMENSION")}</h3>
                                            <p className="descripcion-carrusel">{t("collaborationCoordinationText")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <SecondCollaborationAnalysis />
                                <Row>
                                    <Col md={1} />
                                    <Col md={3}>
                                        <Card border="0">
                                            <Card.Body className="p-5">
                                                <Card.Title className="title-grafico">
                                                    {t("interpretation_of_the_graph")}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>
                                        <Card border="0" >
                                            <Card.Body className="borde-left p-5">
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                                    ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                                    mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                                    auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                                <a onClick={() => { setDataView(3) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                        </Carousel>
                    )
                }
            </Col>
        </Row >
    )
}
