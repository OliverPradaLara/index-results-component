import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico3 from "../SVG/img/Grafico3.svg";
import Grafico4 from "../SVG/img/Grafico4.svg";
import { SecondCollaborationAnalysis } from './SecondCollaborationAnalysis'
import {CarouselDetails} from './CarouselDetails'

export const CollaborationDetails = () => {
    const [view, setView] = useState(0)
    return (
        <>
        <CarouselDetails/>
            {
                view === 1 ? (
                    <>
                        <Row>
                            <Col md={12}>
                                <div>
                                    <p className="text-descripcion">Promedio de cada categoría de instituciones para las 3 dimensiones medidas en el Índice de Innovación Pública. Las
                                    dimensiones tienen un puntaje máximo de 20, 40 y 40 puntos respectivamente, sumando un máximo de 100.</p>
                                </div>
                                <div>
                                    <img src={Grafico4} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2} />
                            <Col md={4}>
                                <Card border="light">
                                    <Card.Body>
                                        <Card.Title>
                                            INTERPRETACIÓN DEL GRÁFICO
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card border="light">
                                    <Card.Body>
                                        <Card.Title>
                                            COORDINACIÓN INTERINSTITUCIONAL
                                        </Card.Title>
                                        <Card.Text>
                                            Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
                                            ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
                                            mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
                                            auctor risus neque, at convallis velit convallis eget.
                                </Card.Text>
                                        <a onClick={() => setView(0)} className="color-orange-one">volver a gráfico principal</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">+ más información sobre las dimensiones</a>
                            </Col>
                        </Row>
                    </>) : (
                    <>
                        <Row>
                            <Col md={12}>
                                <div>
                                    <p className="text-descripcion">Promedio de cada categoría de instituciones para las 3 dimensiones medidas en el Índice de Innovación Pública. Las
                dimensiones tienen un puntaje máximo de 20, 40 y 40 puntos respectivamente, sumando un máximo de 100.</p>
                                </div>
                                <div>
                                    <img src={Grafico3} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Row>

                                <Col md={4}>
                                    <Card border="light">
                                        <Card.Body>
                                            <Card.Title>PARTICIPACIÓN DE USUARIOS</Card.Title>
                                            <Card.Text>
                                                Incentiva el uso de lenguaje claro e
                                                inclusivo en comunicaciones y canales,
                                                promueve mecanismos de
                                                participación, y considera el
                                                involucramiento de usuarios de cada
                                                entidad en las diversas fases de
                                                innovación, como son: participación en
                                                la identificación de brechas a través de
                                                procesos de investigación,
                                                participación como co-creadores de
                                                soluciones, participación como
                                                evaluadores de las soluciones, etc.
            </Card.Text>
                                            <a href="https://www.google.com/?hl=es" className="color-orange-one">ver análisis</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="light">
                                        <Card.Body>
                                            <Card.Title>
                                                COORDINACIÓN INTERINSTITUCIONAL
                    </Card.Title>
                                            <Card.Text>
                                                Busca medir la colaboración y eventual
                                                interoperabilidad entre servicios. En
                                                concreto, incentiva la participación de
                                                distintos servicios en procesos
                                                colaborativos de identificación de
                                                oportunidades para innovar, co-
                                                creación de soluciones,
                                                implementación y/o evaluación
                                                conjunta.
            </Card.Text>
                                            <a onClick={() => setView(1)} className="color-orange-one">ver análisis</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="light" >
                                        <Card.Body>
                                            <Card.Title>GESTIÓN DEL ENTORNO</Card.Title>
                                            <Card.Text>
                                                Mide la existencia de espacios para
                                                colaborar con organizaciones que se
                                                encuentran fuera de la esfera del
                                                Estado, pudiendo ser tratarse de
                                                entidades de la sociedad civil o sector
                                                privado, a fin de incentivar la
                                                incorporación de aprendizajes desde
                                                una perspectiva de innovación abierta.
                    </Card.Text>
                                            <a href="https://www.google.com/?hl=es" className="color-orange-one">ver análisis</a>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">+ más información sobre las dimensiones</a>
                            </Col>
                        </Row>

                    </>
                )
            }
        </>
    )
}