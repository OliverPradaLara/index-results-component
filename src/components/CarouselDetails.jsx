import React, { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const CarouselDetails = () => {
    const { t } = useTranslation();

    return (
        <Row>
            <Col md={12}>
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
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}
