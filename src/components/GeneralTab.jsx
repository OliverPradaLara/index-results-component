import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico1 from "../SVG/img/Grafico1.svg";
import { useTranslation } from 'react-i18next'

export const GeneralTab = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="p-5 bg-light">
                        <p className="text-descripcion">{t("general_tittle")}</p>
                    </div>
                    <div className="graphic-acc-3">
                        <img width="85%" src={Grafico1} alt="gráfico" />
                    </div>
                </Col>
            </Row>
            <Row className="p-5">
                <Col md={4}>
                    <Card >
                        <Card.Body className="box-dimensions-text">
                            <Card.Title className="title-resultado">{t("pillars")}</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                {t("pillars_text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="borde">
                    <Card>
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
                        <Card.Body className="box-dimensions-text">
                            <Card.Title className="title-resultado">{t("new")}</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                {t("new_text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="text-center pt-4 pb-4" md={12}>
                    <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("more_category")}</a>
                </Col>
            </Row>
        </>
    )
}