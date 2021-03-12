import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico3 from "../SVG/img/Grafico3.svg";
import { FirstCollaborationAnalysis } from "./FirstCollaborationAnalysis";
import { SecondCollaborationAnalysis } from "./SecondCollaborationAnalysis";
import { ThirdCollaborationAnalysis } from "./ThirdCollaborationAnalysis";
import { useTranslation } from 'react-i18next'

export const CollaborationDetails = () => {
    const [view, setView] = useState(0)
    const { t } = useTranslation();

    return (
        <>
            {
                view === 1 ? (
                    <>
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
                                                <a onClick={() => setView(1)} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
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
                                                <a onClick={() => setView(2)} className="color-orange-one">{t("dimensionsAnalysisText")}</a>
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