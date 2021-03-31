import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico1 from "../SVG/img/Grafico1.svg";
import generales1R from "../SVG/img/generales1R.svg";
import generales2R from "../SVG/img/generales2R.svg";
import generales3R from "../SVG/img/generales3R.svg";
import { useTranslation } from 'react-i18next'

export const GeneralTab = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row className="acc-width">
                <Col md={12}>
                    <div className="p-4 comp-pad-general">
                        <p className="text-descripcion">{t("general_tittle")}</p>
                    </div>
                    <div className="graphic-acc-3">
                        <img width="80%" src={Grafico1} alt="gráfico" />
                    </div>
                </Col>
            </Row>
            <Row className="p-5 acc-width">
                <Col md={4}>
                    <Card >
                        <div className="tabResponsive">
                            <img width="80%" src={generales1R} alt="gráfico" />
                        </div>
                        <Card.Body className="box-dimensions-text">
                            <Card.Title className="title-resultado">{t("pillars")}</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                {t("pillars_text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="borde tabCardBorder">
                    <Card>
                        <div className="tabResponsive">
                            <img width="80%" src={generales2R} alt="gráfico" />
                        </div>
                        <Card.Body className="box-dimensions-text">
                            <Card.Title className="title-resultado">{t("centralized")}</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                {t("centralized_text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <div className="tabResponsive">
                            <img width="80%" src={generales3R} alt="gráfico" />
                        </div>
                        <Card.Body className="box-dimensions-text">
                            <Card.Title className="title-resultado">{t("new")}</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                {t("new_text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="acc-width">
                <Col className="text-center pt-4 pb-4" md={12}>
                    <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("more_category")}</a>
                </Col>
            </Row>
        </>
    )
}