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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN TALENTO HUMANO</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                            mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                            diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                            procesos de investigación, participación como co-creadores de soluciones, participación como
                                            evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN MARCO INSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de redes internas de colaboración para gestionar la innovación en el servicio,
                                            es decir, incentiva la conformación de mesas o grupos de trabajo sistemáticos inter-áreas para
                                            llevar a cabo iniciativas de innovación. Por otro lado, indaga acerca de la disponibilidad de datos
                                            abiertos, o sea, la publicación de información más allá de la contenida en la Ley de
                                            Transparencia, con alta periodicidad y en formato de datos diferentes y editables por parte del
                                            servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN RECURSOS DIGITALES</h3>
                                            <p className="descripcion-carrusel">Incluye aspectos referidos específicamente a competencias de los equipos en ámbitos digitales,
                                            la digitalización de trámites y ciertos procesos, junto con elementos clave de infraestructura
                                            digital. Esta información es capturada principalmente de datos administrativos, de la División de
                                            Gobierno Digital de Chile.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ESTRATEGIA Y GOBERNANZA</h3>
                                            <p className="descripcion-carrusel">Tiene por objetivo destacar aquellos servicios que consideran que la innovación es parte
                                            fundamental de su estrategia y que además establecen una gobernanza para dichos efectos. La
                                            existencia de ambos elementos es habilitante ya que en la medida que su relevancia es definida
                                            de manera más clara y explícita, es posible que ésta se torne más habitual, transversal y
                                            presente en el quehacer de la institución.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN MARCO INSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de redes internas de colaboración para gestionar la innovación en el servicio,
                                            es decir, incentiva la conformación de mesas o grupos de trabajo sistemáticos inter-áreas para
                                            llevar a cabo iniciativas de innovación. Por otro lado, indaga acerca de la disponibilidad de datos
                                            abiertos, o sea, la publicación de información más allá de la contenida en la Ley de
                                            Transparencia, con alta periodicidad y en formato de datos diferentes y editables por parte del
                                            servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN RECURSOS DIGITALES</h3>
                                            <p className="descripcion-carrusel">Incluye aspectos referidos específicamente a competencias de los equipos en ámbitos digitales,
                                            la digitalización de trámites y ciertos procesos, junto con elementos clave de infraestructura
                                            digital. Esta información es capturada principalmente de datos administrativos, de la División de
                                            Gobierno Digital de Chile.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ESTRATEGIA Y GOBERNANZA</h3>
                                            <p className="descripcion-carrusel">Tiene por objetivo destacar aquellos servicios que consideran que la innovación es parte
                                            fundamental de su estrategia y que además establecen una gobernanza para dichos efectos. La
                                            existencia de ambos elementos es habilitante ya que en la medida que su relevancia es definida
                                            de manera más clara y explícita, es posible que ésta se torne más habitual, transversal y
                                            presente en el quehacer de la institución.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN TALENTO HUMANO</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                            mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                            diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                            procesos de investigación, participación como co-creadores de soluciones, participación como
                                            evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN RECURSOS DIGITALES</h3>
                                            <p className="descripcion-carrusel">Incluye aspectos referidos específicamente a competencias de los equipos en ámbitos digitales,
                                            la digitalización de trámites y ciertos procesos, junto con elementos clave de infraestructura
                                            digital. Esta información es capturada principalmente de datos administrativos, de la División de
                                            Gobierno Digital de Chile.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ESTRATEGIA Y GOBERNANZA</h3>
                                            <p className="descripcion-carrusel">Tiene por objetivo destacar aquellos servicios que consideran que la innovación es parte
                                            fundamental de su estrategia y que además establecen una gobernanza para dichos efectos. La
                                            existencia de ambos elementos es habilitante ya que en la medida que su relevancia es definida
                                            de manera más clara y explícita, es posible que ésta se torne más habitual, transversal y
                                            presente en el quehacer de la institución.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN TALENTO HUMANO</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                            mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                            diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                            procesos de investigación, participación como co-creadores de soluciones, participación como
                                            evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN MARCO INSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de redes internas de colaboración para gestionar la innovación en el servicio,
                                            es decir, incentiva la conformación de mesas o grupos de trabajo sistemáticos inter-áreas para
                                            llevar a cabo iniciativas de innovación. Por otro lado, indaga acerca de la disponibilidad de datos
                                            abiertos, o sea, la publicación de información más allá de la contenida en la Ley de
                                            Transparencia, con alta periodicidad y en formato de datos diferentes y editables por parte del
                                            servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ESTRATEGIA Y GOBERNANZA</h3>
                                            <p className="descripcion-carrusel">Tiene por objetivo destacar aquellos servicios que consideran que la innovación es parte
                                            fundamental de su estrategia y que además establecen una gobernanza para dichos efectos. La
                                            existencia de ambos elementos es habilitante ya que en la medida que su relevancia es definida
                                            de manera más clara y explícita, es posible que ésta se torne más habitual, transversal y
                                            presente en el quehacer de la institución.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN TALENTO HUMANO</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                            mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                            diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                            procesos de investigación, participación como co-creadores de soluciones, participación como
                                            evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN MARCO INSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de redes internas de colaboración para gestionar la innovación en el servicio,
                                            es decir, incentiva la conformación de mesas o grupos de trabajo sistemáticos inter-áreas para
                                            llevar a cabo iniciativas de innovación. Por otro lado, indaga acerca de la disponibilidad de datos
                                            abiertos, o sea, la publicación de información más allá de la contenida en la Ley de
                                            Transparencia, con alta periodicidad y en formato de datos diferentes y editables por parte del
                                            servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN RECURSOS DIGITALES</h3>
                                            <p className="descripcion-carrusel">Incluye aspectos referidos específicamente a competencias de los equipos en ámbitos digitales,
                                            la digitalización de trámites y ciertos procesos, junto con elementos clave de infraestructura
                                            digital. Esta información es capturada principalmente de datos administrativos, de la División de
                                            Gobierno Digital de Chile.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ACTIVIDADES O PRÁCTICAS</h3>
                                            <p className="descripcion-carrusel">Son aquellas que se realizan de manera espontánea o esporádica dentro de los servicios y que, a
                                                medida que se normalizan, permiten avanzar en la consolidación de capacidades. En específico,
                                                mide la cantidad de iniciativas realizadas en el año y la calidad del proceso de innovación
                                                llevado a cabo, es decir, si cumple con las etapas de un proceso de diseño experimental: diseño,
                                                prototipado, testeo, ajustes, implementación, evaluación posterior y acciones de gestión del
                                                cambio que puedan contribuir</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PROCEDIMIENTOS</h3>
                                            <p className="descripcion-carrusel">Son un esfuerzo por organizar las actividades que pueden desarrollarse de manera esporádica.
                                                En específico, se mide la existencia de procedimientos para identificar necesidades de usuarios/
                                                as, desarrollar prototipos para ser puestos a prueba y evaluar el desempeño de las iniciativas de
                                                innovación. La existencia de procedimientos en estos ámbitos es relevante puesto que orienta el
                                                trabajo y supone una periodicidad en su ejecución</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PROCESOS</h3>
                                            <p className="descripcion-carrusel">Son el paso más avanzado en cuanto a la formalización de actividades bajo un flujo
                                                sistemático, que guía de manera encadenada cada una de las tareas necesarias para llevar a
                                                cabo una iniciativa de innovación en el servicio. En la medida que los procesos son más claros y
                                                simples con respecto a los mecanismos a utilizar y los resultados esperados, se facilita incorporar
                                                la capacidad de innovar de manera transversal en el servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PROCEDIMIENTOS</h3>
                                            <p className="descripcion-carrusel">Son un esfuerzo por organizar las actividades que pueden desarrollarse de manera esporádica.
                                                En específico, se mide la existencia de procedimientos para identificar necesidades de usuarios/
                                                as, desarrollar prototipos para ser puestos a prueba y evaluar el desempeño de las iniciativas de
                                                innovación. La existencia de procedimientos en estos ámbitos es relevante puesto que orienta el
                                                trabajo y supone una periodicidad en su ejecución</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PROCESOS</h3>
                                            <p className="descripcion-carrusel">Son el paso más avanzado en cuanto a la formalización de actividades bajo un flujo
                                                sistemático, que guía de manera encadenada cada una de las tareas necesarias para llevar a
                                                cabo una iniciativa de innovación en el servicio. En la medida que los procesos son más claros y
                                                simples con respecto a los mecanismos a utilizar y los resultados esperados, se facilita incorporar
                                                la capacidad de innovar de manera transversal en el servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ACTIVIDADES O PRÁCTICAS</h3>
                                            <p className="descripcion-carrusel">Son aquellas que se realizan de manera espontánea o esporádica dentro de los servicios y que, a
                                                medida que se normalizan, permiten avanzar en la consolidación de capacidades. En específico,
                                                mide la cantidad de iniciativas realizadas en el año y la calidad del proceso de innovación
                                                llevado a cabo, es decir, si cumple con las etapas de un proceso de diseño experimental: diseño,
                                                prototipado, testeo, ajustes, implementación, evaluación posterior y acciones de gestión del
                                                cambio que puedan contribuir</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PROCESOS</h3>
                                            <p className="descripcion-carrusel">Son el paso más avanzado en cuanto a la formalización de actividades bajo un flujo
                                                sistemático, que guía de manera encadenada cada una de las tareas necesarias para llevar a
                                                cabo una iniciativa de innovación en el servicio. En la medida que los procesos son más claros y
                                                simples con respecto a los mecanismos a utilizar y los resultados esperados, se facilita incorporar
                                                la capacidad de innovar de manera transversal en el servicio.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN ACTIVIDADES O PRÁCTICAS</h3>
                                            <p className="descripcion-carrusel">Son aquellas que se realizan de manera espontánea o esporádica dentro de los servicios y que, a
                                                medida que se normalizan, permiten avanzar en la consolidación de capacidades. En específico,
                                                mide la cantidad de iniciativas realizadas en el año y la calidad del proceso de innovación
                                                llevado a cabo, es decir, si cumple con las etapas de un proceso de diseño experimental: diseño,
                                                prototipado, testeo, ajustes, implementación, evaluación posterior y acciones de gestión del
                                                cambio que puedan contribuir</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PROCEDIMIENTOS</h3>
                                            <p className="descripcion-carrusel">Son un esfuerzo por organizar las actividades que pueden desarrollarse de manera esporádica.
                                                En específico, se mide la existencia de procedimientos para identificar necesidades de usuarios/
                                                as, desarrollar prototipos para ser puestos a prueba y evaluar el desempeño de las iniciativas de
                                                innovación. La existencia de procedimientos en estos ámbitos es relevante puesto que orienta el
                                                trabajo y supone una periodicidad en su ejecución</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PARTICIPACIÓN DE USUARIOS</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                                mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                                diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                                procesos de investigación, participación como co-creadores de soluciones, participación como
                                                evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN COORDINACIÓN INTERINSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la colaboración y eventual interoperabilidad entre servicios. En concreto, incentiva la
                                                participación de distintos servicios en procesos colaborativos de identificación de oportunidades
                                                para innovar, co-creación de soluciones, implementación y/o evaluación conjunta.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN GESTIÓN DEL ENTORNO</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de espacios para colaborar con organizaciones que se encuentran fuera de la
                                                esfera del Estado, pudiendo ser tratarse de entidades de la sociedad civil o sector privado, a fin
                                                de incentivar la incorporación de aprendizajes desde una perspectiva de innovación abierta.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN COORDINACIÓN INTERINSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la colaboración y eventual interoperabilidad entre servicios. En concreto, incentiva la
                                                participación de distintos servicios en procesos colaborativos de identificación de oportunidades
                                                para innovar, co-creación de soluciones, implementación y/o evaluación conjunta.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN GESTIÓN DEL ENTORNO</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de espacios para colaborar con organizaciones que se encuentran fuera de la
                                                esfera del Estado, pudiendo ser tratarse de entidades de la sociedad civil o sector privado, a fin
                                                de incentivar la incorporación de aprendizajes desde una perspectiva de innovación abierta.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PARTICIPACIÓN DE USUARIOS</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                                mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                                diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                                procesos de investigación, participación como co-creadores de soluciones, participación como
                                                evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN GESTIÓN DEL ENTORNO</h3>
                                            <p className="descripcion-carrusel">Mide la existencia de espacios para colaborar con organizaciones que se encuentran fuera de la
                                                esfera del Estado, pudiendo ser tratarse de entidades de la sociedad civil o sector privado, a fin
                                                de incentivar la incorporación de aprendizajes desde una perspectiva de innovación abierta.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN PARTICIPACIÓN DE USUARIOS</h3>
                                            <p className="descripcion-carrusel">Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve
                                                mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las
                                                diversas fases de innovación, como son: participación en la identificación de brechas a través de
                                                procesos de investigación, participación como co-creadores de soluciones, participación como
                                                evaluadores de las soluciones, etc.</p>
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
                                            <h3 className="titulo-carrusel">SUBDIMENSIÓN COORDINACIÓN INTERINSTITUCIONAL</h3>
                                            <p className="descripcion-carrusel">Mide la colaboración y eventual interoperabilidad entre servicios. En concreto, incentiva la
                                                participación de distintos servicios en procesos colaborativos de identificación de oportunidades
                                                para innovar, co-creación de soluciones, implementación y/o evaluación conjunta.</p>
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
