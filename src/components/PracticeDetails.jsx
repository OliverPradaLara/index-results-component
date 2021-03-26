import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import SubPracticas1 from "../SVG/img/Sub-Practicas-01.svg";
import { FirstPracticeAnalysis } from "./FirstPracticeAnalysis";
import { SecondPracticeAnalysis } from "./SecondPracticeAnalysis";
import { ThirdPracticeAnalysis } from "./ThirdPracticeAnalysis";
import { useTranslation } from 'react-i18next'

export const PracticeDetails = () => {
    const [view, setView] = useState(0)

    const { t } = useTranslation();

    return (
        <>
            {
                view === 1 ? (
                    <>
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
                                        <a onClick={() => setView(0)} className="color-orange-one">{t("return_to_main_graph")}</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                            </Col>
                        </Row>
                    </>

                ) : view === 2 ? (
                    <>
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
                                        <a onClick={() => setView(0)} className="color-orange-one">{t("return_to_main_graph")}</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                            </Col>
                        </Row>
                    </>
                ) : view === 3 ? (
                    <>
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
                                        <a onClick={() => setView(0)} className="color-orange-one">{t("return_to_main_graph")}</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("dimensionsInformationPlus")}</a>
                            </Col>
                        </Row>
                    </>
                )
                    : (
                        <>
                            <Row>
                                <Col md={12}>
                                    <div className="text-center p-5">
                                        <img width="80%" src={SubPracticas1} alt="" />
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
                                                <a onClick={() => setView(1)} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
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
                                                <a onClick={() => setView(2)} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
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
                                                <a onClick={() => setView(3)} className="color-orange-one">{t("dimensionsAnalysisText")}</a>

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

                        </>
                    )
            }
        </>
    )
}