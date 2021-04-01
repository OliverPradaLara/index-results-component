import React, { useState } from 'react'
import { Carousel, Row, Col, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import SubRecursos1 from "../SVG/img/Sub-Recursos-01.svg";
import { CarouselResources } from "./CarouselResources"
import { CarouselPractice } from "./CarouselPractice"
import { CarouselCollaboration } from "./CarouselCollaboration"

import Grafico3 from "../SVG/img/Grafico3.svg";

import talentoHumanoR from "../SVG/img/talentoHumanoR.svg";
import marcoInstitucionalR from "../SVG/img/marcoInstitucionalR.svg";
import recursosDigitalesR from "../SVG/img/recursosDigitalesR.svg";
import estrategiaGobernanzaR from "../SVG/img/estrategiaGobernanzaR.svg";

import actividadesPracticasR from "../SVG/img/actividadesPracticasR.svg";
import procedimientosR from "../SVG/img/procedimientosR.svg";
import procesosR from "../SVG/img/procesosR.svg";

import participacionUsuariosR from "../SVG/img/participacionUsuariosR.svg";
import coordinacionInterinstitucionalR from "../SVG/img/coordinacionInterinstitucionalR.svg";
import gestionDelEntorno from "../SVG/img/gestionDelEntorno.svg";


import SubPracticas1 from "../SVG/img/Sub-Practicas-01.svg";
//Molecula
import AnalisisAcordion from './Moleculas/AnalisisAcordion';
//Organismos
import SubDimensionesCard from './Organismos/SubDimensionesCard';





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
                                        <img width="80%" src={SubRecursos1} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="interpretation-card">
                                <SubDimensionesCard 
                                    imagen={ talentoHumanoR } 
                                    titulo={ t("title_Human_Talent") } 
                                    descripcion={ t("description_Human_Talent") } 
                                    textolink={ t("dimensionsAnalysisText") } 
                                    titulointerpretaciongrafico={ t("interpretation_of_the_graph") }
                                    descripcioninterpretaciongrafico={ t("graphic_interpretation_Human_Talent") }
                                    analisistexto={ t("dimensionsAnalysisText") }
                                    onclick={ () => { setDetailView(11) } }
                                />
                
                                <SubDimensionesCard 
                                    imagen={ marcoInstitucionalR } 
                                    titulo={ t("title_Institutional_Frame") } 
                                    descripcion={ t("description_Institutional_Frame") } 
                                    textolink={ t("dimensionsAnalysisText") } 
                                    titulointerpretaciongrafico={ t("interpretation_of_the_graph") }
                                    descripcioninterpretaciongrafico={ t("graphic_interpretation_Institutional_Frame") }
                                    analisistexto={ t("dimensionsAnalysisText") }
                                    onclick={ () => { setDetailView(12) } }
                                />

                                <SubDimensionesCard 
                                    imagen={ recursosDigitalesR } 
                                    titulo={ t("title_Digital_Resources") } 
                                    descripcion={ t("description_Digital_Resources") } 
                                    textolink={ t("dimensionsAnalysisText") } 
                                    titulointerpretaciongrafico={ t("interpretation_of_the_graph") }
                                    descripcioninterpretaciongrafico={ t("graphic_interpretation_Digital_Resources") }
                                    analisistexto={ t("dimensionsAnalysisText") }
                                    onclick={ () => { setDetailView(13) } }
                                />
                            

                                <Col md={4} className="interpretation-card dimensions-cards">
                                    <Row className="centerGraphicDimesions">
                                        <div className="tabResponsive">
                                            <img width="80%" src={recursosDigitalesR} alt="gráfico" />
                                        </div>
                                    </Row>
                                    <Row className="row-a-dimensions-top">
                                        <Col>
                                            <Card.Title className="title-resultado">{t("title_Digital_Resources")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("description_Digital_Resources")}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className="row-a-dimensions-bottom">
                                        <Col className="col-a-dimensions">
                                            <div className="text-center isDesktop">
                                                <a href="/#" onClick={() => { setDetailView(13) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </div>
                                            <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_Digital_Resources")} analisis={ t("dimensionsAnalysisText") } />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={4} className="interpretation-card dimensions-cards">
                                    <Row className="centerGraphicDimesions">
                                        <div className="tabResponsive">
                                            <img width="80%" src={estrategiaGobernanzaR} alt="gráfico" />
                                        </div>
                                    </Row>
                                    <Row className="row-a-dimensions-top">
                                        <Col>
                                            <Card.Title className="title-resultado">{t("title_Strategy_and_Governability")}</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                {t("description_Strategy_and_Governability")}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className="row-a-dimensions-bottom">
                                        <Col className="col-a-dimensions">
                                            <div className="text-center isDesktop">
                                                <a href="/#" onClick={() => { setDetailView(14) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                            </div>
                                            <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_Strategy_and_Governability")} analisis={ t("dimensionsAnalysisText") } />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center" >
                                    {/* <Button onClick={() => props.goBack()} className="goBack-button" >
                                    <b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}
                                    </Button> */}
                                    <a onClick={() => props.goBack()} className="goBack-button color-orange-one"><b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}</a>
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
                                        <img width="80%" src={SubPracticas1} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Row className="interpretation-card">
                                    <Col md={4} className="interpretation-card dimensions-cards">
                                        <Row className="centerGraphicDimesions">
                                            <div className="tabResponsive">
                                                <img width="80%" src={actividadesPracticasR} alt="gráfico" />
                                            </div>
                                        </Row>
                                        <Row className="row-a-dimensions-top">
                                            <Col>
                                                <Card.Title className="title-resultado">{t("title_Activities_or_practices")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Activities_or_practices")}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="row-a-dimensions-bottom">
                                            <Col className="col-a-dimensions">
                                                <div className="text-center isDesktop">
                                                    <a href="/#" onClick={() => { setDetailView(21) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </div>
                                                <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_Activities_or_practices")} analisis={ t("dimensionsAnalysisText") } />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={4} className="interpretation-card border-letf-right dimensions-cards">
                                        <Row className="centerGraphicDimesions">
                                            <div className="tabResponsive">
                                                <img width="80%" src={procedimientosR} alt="gráfico" />
                                            </div>
                                        </Row>
                                        <Row className="row-a-dimensions-top">
                                            <Col>
                                                <Card.Title className="title-resultado">{t("title_Proceedings")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Proceedings")}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="row-a-dimensions-bottom">
                                            <Col className="col-a-dimensions">
                                                <div className="text-center isDesktop">
                                                    <a href="/#" onClick={() => { setDetailView(22) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </div>
                                                <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_Proceedings")} analisis={ t("dimensionsAnalysisText") } />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={4} className="interpretation-card dimensions-cards">
                                        <Row className="centerGraphicDimesions">
                                            <div className="tabResponsive">
                                                <img width="80%" src={procesosR} alt="gráfico" />
                                            </div>
                                        </Row>
                                        <Row className="row-a-dimensions-top">
                                            <Col>
                                                <Card.Title className="title-resultado">{t("title_Processes")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("description_Processes")}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="row-a-dimensions-bottom">
                                            <Col className="col-a-dimensions">
                                                <div className="text-center isDesktop">
                                                    <a href="/#" onClick={() => { setDetailView(23) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </div>
                                                <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_Processes")} analisis={ t("dimensionsAnalysisText") } />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center" >
                                    <a onClick={() => props.goBack()} className="goBack-button color-orange-one"><b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}</a>
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
                                        <img width="80%" src={Grafico3} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Row className="interpretation-card">
                                    <Col md={4} className="interpretation-card dimensions-cards">
                                        <Row className="centerGraphicDimesions">
                                            <div className="tabResponsive">
                                                <img width="80%" src={participacionUsuariosR} alt="gráfico" />
                                            </div>
                                        </Row>
                                        <Row className="row-a-dimensions-top">
                                            <Col>
                                                <Card.Title className="title-resultado">{t("collaborationUserTittle")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("collaborationUserText")}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="row-a-dimensions-bottom">
                                            <Col className="col-a-dimensions">
                                                <div className="text-center isDesktop">
                                                    <a href="/#" onClick={() => { setDetailView(31) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </div>
                                                <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_collaboration_user")} analisis={ t("dimensionsAnalysisText") } />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={4} className="interpretation-card dimensions-cards">
                                        <Row className="centerGraphicDimesions">
                                            <div className="tabResponsive">
                                                <img width="80%" src={coordinacionInterinstitucionalR} alt="gráfico" />
                                            </div>
                                        </Row>
                                        <Row className="row-a-dimensions-top">
                                            <Col>
                                                <Card.Title className="title-resultado">
                                                    {t("collaborationCoordinationTittle")}
                                                </Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("collaborationCoordinationText")}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="row-a-dimensions-bottom">
                                            <Col className="col-a-dimensions">
                                                <div className="text-center isDesktop">
                                                    <a href="/#" onClick={() => { setDetailView(32) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </div>
                                                <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_collaboration_coordination")} analisis={ t("dimensionsAnalysisText") } />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={4} className="interpretation-card dimensions-cards">
                                        <Row className="centerGraphicDimesions">
                                            <div className="tabResponsive">
                                                <img width="80%" src={gestionDelEntorno} alt="gráfico" />
                                            </div>
                                        </Row>
                                        <Row className="row-a-dimensions-top">
                                            <Col>
                                                <Card.Title className="title-resultado">{t("collaborationManagmentTittle")}</Card.Title>
                                                <Card.Text className="descripcion-resultado">
                                                    {t("collaborationManagmentText")}
                                                </Card.Text>
                                            </Col>

                                        </Row>
                                        <Row className="row-a-dimensions-bottom">
                                            <Col className="col-a-dimensions">
                                                <div className="text-center isDesktop">
                                                    <a href="/#" onClick={() => { setDetailView(33) }} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
                                                </div>
                                                <AnalisisAcordion titulo={ t("interpretation_of_the_graph") } descripcion={ t("graphic_interpretation_collaboration_managment")} analisis={ t("dimensionsAnalysisText") } />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <Col md={12} className="text-center" >
                                    <a onClick={() => props.goBack()} className="goBack-button color-orange-one"><b><i className="fas fa-chevron-left"></i></b> {t("return_to_main_graph")}</a>
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
