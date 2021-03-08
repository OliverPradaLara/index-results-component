import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico1 from "../SVG/img/Grafico1.svg";

export const GeneralTab = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="p-5">
                        <p className="text-descripcion">Distribución del puntaje del Índice de Innovación Pública según categoría de instituciones sobre un máximo de 100 puntos. Año de referencia 2019 - 37 servicios participantes.</p>
                    </div>
                    <div className="text-center p-5">
                        <img width="85%" src={Grafico1} alt= "gráfico" />
                    </div>
                </Col>
            </Row>
            <Row className="p-5">
                <Col md={4}>
                    <Card border="0">
                        <Card.Body className="p-5">
                            <Card.Title className="title-resultado">PILARES</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                Corresponde a 15 servicios públicos en
                                la primera medición. Se caracterizan
                                por tener un presupuesto alto,
                                ejecutado mayoritariamente de
                                manera descentralizada. Algunos
                                ejemplos son: el Fondo Nacional de
                                Salud (Fonasa) y el Servicio de
                                Impuestos Internos (SII).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border="0">
                        <Card.Body className="borde p-5">
                            <Card.Title className="title-resultado">CENTRALIZADAS</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                Corresponde a 7 servicios públicos,
                                caracterizados por una forma de
                                organización que tiende a la
                                centralización. Además otorgan una
                                cantidad amplia de productos o
                                servicios estratégicos, como son: la
                                Dirección General de Obras Públicas
                                (DGOP) y la Oficina Nacional de
                                Emergencia (ONEMI).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="borde" border="0" >
                        <Card.Body className="p-5">
                            <Card.Title className="title-resultado">NUEVAS</Card.Title>
                            <Card.Text className="descripcion-resultado">
                                Son 15 servicios públicos en la primera
                                medición, definidos principalmente por
                                su año de creación, en su mayoría
                                posterior a 1980. A esta categoría
                                pertenecen instituciones como el
                                Servicio Nacional del Adulto Mayor
                                (Senama) y la Defensora Penal Pública
                                (DPP).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="text-center pt-4 pb-4" md={12}>
                    <a  href="https://www.google.com/?hl=es" className="color-orange-one">+ más información sobre las categorías</a>
                </Col>
            </Row>
        </>
    )
}