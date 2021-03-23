import React from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { FirstResourcesAnalysis } from "./FirstResourcesAnalysis";
import { SecondResourcesAnalysis } from "./SecondResourcesAnalysis";
import { ThirdResourcesAnalysis } from "./ThirdResourcesAnalysis";
import { FourthResourcesAnalysis } from "./FourthResourcesAnalysis";
import { useState } from 'react'

export const CarouselResources = (props) => {
    const subDimensions = props.subDimensions
    const { t } = useTranslation();

    return (
        <Row>
            <Col md={12}>
                <Carousel interval={null} defaultActiveIndex={subDimensions === 11 ? 0 : subDimensions === 12 ? 1 : subDimensions === 13 ? 2 : 3}>
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
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
                                    <Card.Body className="interpretation-card">
                                        <Card.Title className="title-grafico">
                                            {t("interpretation_of_the_graph")}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card border="0" >
                                    <Card.Body className="borde-left interpretation-card">
                                        <Card.Text className="descripcion-resultado">
                                            Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                            ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                            mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                            auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                        <a onClick={() => { props.goBack(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                    <Card.Body className="interpretation-card">
                                        <Card.Title className="title-grafico">
                                            {t("interpretation_of_the_graph")}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card border="0" >
                                    <Card.Body className="borde-left interpretation-card">
                                        <Card.Text className="descripcion-resultado">
                                            Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                            ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                            mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                            auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                        <a onClick={() => { props.goBack(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                    <Card.Body className="interpretation-card">
                                        <Card.Title className="title-grafico">
                                            {t("interpretation_of_the_graph")}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card border="0" >
                                    <Card.Body className="borde-left interpretation-card">
                                        <Card.Text className="descripcion-resultado">
                                            Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                            ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                            mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                            auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                        <a onClick={() => { props.goBack(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                    <Card.Body className="interpretation-card">
                                        <Card.Title className="title-grafico">
                                            {t("interpretation_of_the_graph")}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card border="0" >
                                    <Card.Body className="borde-left interpretation-card">
                                        <Card.Text className="descripcion-resultado">
                                            Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                            ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                            mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                            auctor risus neque, at convallis velit convallis eget.
                                            </Card.Text>
                                        <a onClick={() => { props.goBack(1) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
            </Col>
        </Row>
    )
}
