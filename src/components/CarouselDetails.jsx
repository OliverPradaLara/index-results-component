import React, { useState } from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { CollaborationDetails } from './CollaborationDetails'
import { PracticeDetails } from './PracticeDetails'
import { ResourcesDetails } from './ResourcesDetails'

export const CarouselDetails = (detail) => {
    const [view, setView] = useState(0)
    const { t } = useTranslation();
    let detailView = detail.detail
    console.log(detailView)
    console.log("parametro fuera",view)
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
                                <ResourcesDetails />
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
                                <PracticeDetails />
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
                                <CollaborationDetails />
                            </Carousel.Item>
                        </Carousel>
                    ) : detailView === 2 ? (
                        <Carousel interval={null}>
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
                                    <PracticeDetails />
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
                                    <CollaborationDetails />
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
                                    <ResourcesDetails />
                                </Carousel.Item>
                            </Carousel>
                        </Carousel>
                    ) : (
                        <Carousel interval={null}>
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
                                    <CollaborationDetails />
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
                                    <ResourcesDetails />
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
                                    <PracticeDetails />
                                </Carousel.Item>
                            </Carousel>
                        </Carousel>
                    )
                }
            </Col>
        </Row>
    )
}
