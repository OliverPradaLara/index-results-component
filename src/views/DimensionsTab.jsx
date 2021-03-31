import { React, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico2 from "./../SVG/img/Grafico2.svg";
import dimensiones1R from "./../SVG/img/dimensiones1R.svg";
import dimensiones2R from "./../SVG/img/dimensiones2R.svg";
import dimensiones3R from "./../SVG/img/dimensiones3R.svg";
import { CarouselDetails } from '../components/CarouselDetails'
import { useTranslation } from 'react-i18next'

export const DimensionsTab = (props) => {
    const [view, setView] = useState(0)
    const { t } = useTranslation();
    const back = () => {
        setView(0)
    }

    return (
        <>
            {
                view !== 0 ? (
                    <CarouselDetails dimensions={view} goBack={back} />
                ) : (
                    <>
                        <Row className="acc-width">
                            <Col md={12}>
                                <div className="p-4 comp-pad-general">
                                    <p className="text-descripcion">{t("tittleDimensions")}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="acc-width">
                            <Col md={12}>
                                <div className="graphic-acc-3">
                                    <img width="80%" src={Grafico2} alt="grafico2" />
                                </div>
                            </Col>
                        </Row>
                        <Row className=" box-dimensions-text acc-width">
                            <Col md={4} className="interpretation-card dimensions-cards">
                                <Row className="centerGraphicDimesions">
                                    <div className="tabResponsive">
                                        <img width="80%" src={dimensiones2R} alt="gráfico" />
                                    </div>
                                </Row>
                                <Row className="row-a-dimensions-top">
                                    <Col>
                                        <Card.Title className="title-resultado">{t("tittleInstitutionals")}</Card.Title>
                                        <Card.Text className="descripcion-resultado">
                                            {t("dimensionsInstitutionalsText")}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="row-a-dimensions-bottom">
                                    <Col className="col-a-dimensions">
                                        <div className="text-center">
                                            <a href="/#" onClick={() => setView(1)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="interpretation-card borde dimensions-cards">
                                <Row className="centerGraphicDimesions" >
                                    <div className="tabResponsive">
                                        <img width="80%" src={dimensiones1R} alt="gráfico" />
                                    </div>
                                </Row>
                                <Row className="row-a-dimensions-top">
                                    <Col>
                                        <Card.Title className="title-resultado">{t("tittleProcess")}</Card.Title>
                                        <Card.Text className="descripcion-resultado">
                                            {t("dimensionsProcessText")}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="row-a-dimensions-bottom">
                                    <Col className="col-a-dimensions">
                                        <div className="text-center">
                                            <a href="/#" onClick={() => setView(2)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="interpretation-card dimensions-cards">
                                <Row className="centerGraphicDimesions" >
                                    <div className="tabResponsive">
                                        <img width="80%" src={dimensiones3R} alt="gráfico" />
                                    </div>
                                </Row>
                                <Row className="row-a-dimensions-top">
                                    <Col>
                                        <Card.Title className="title-resultado">{t("tittleCollaboration")}</Card.Title>
                                        <Card.Text className="descripcion-resultado">
                                            {t("dimensionsCollaborationText")}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="row-a-dimensions-bottom">
                                    <Col className="col-a-dimensions">
                                        <div className="text-center">
                                            <a href="/#" onClick={() => setView(3)} className="color-orange-one">{t("dimensionsdetailsTittle")}</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                )
            }

        </>
    )
}