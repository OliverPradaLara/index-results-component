import React from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { FirstPracticeAnalysis } from "./FirstPracticeAnalysis";
import { SecondPracticeAnalysis } from "./SecondPracticeAnalysis";
import { ThirdPracticeAnalysis } from "./ThirdPracticeAnalysis";

export const CarouselPractice = (props) => {
    const { t } = useTranslation();
    const subDimensions = props.subDimensions

    return (
        <Row>
            <Col md={12}>
                <Carousel interval={null} defaultActiveIndex={subDimensions === 21 ? 0 : subDimensions === 22 ? 1 : subDimensions === 23 ? 2 : ""}>
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
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
                                         <a href="/#" onClick={() => { props.goBack(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
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
                                         <a href="/#" onClick={() => { props.goBack(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                 <a  href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex color-grey justify-content-center">
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
                                         <a href="/#" onClick={() => { props.goBack(2) }} className="color-orange-one">{t("return_to_main_graph")}</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                 <a  href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>

            </Col>
        </Row >
    )
}
