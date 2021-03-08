import { React, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico2 from "./../SVG/img/Grafico2.svg";
import { CollaborationDetails } from './../components/CollaborationDetails'

export const DimensionsTab = () => {
    const [view, setView] = useState(0)


    return (
        <>
            {
                view === 1 ? (
                    <CollaborationDetails />
                ) : (
                    <>
                        <Row>
                            <Col md={12}>
                                <div className="p-5">
                                    <p className="text-descripcion">Promedio de cada categoría de instituciones para las 3 dimensiones medidas en el Índice de Innovación Pública. Las
                        dimensiones tienen un puntaje máximo de 20, 40 y 40 puntos respectivamente, sumando un máximo de 100.</p>
                                </div>
                                <div className="text-center p-5">
                                    <img width="85%" src={Grafico2} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Row className="p-5">

                                <Col md={4}>
                                    <Card border="light">
                                        <Card.Body className="p-5">
                                            <Card.Title className="title-resultado">RECURSOS INSTITUCIONALES</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                Corresponde a los aspectos más
                                                básicos o habilitantes para el desarrollo
                                                de las capacidades para innovar. Sin su
                                                existencia, las siguientes dimensiones
                                                tienen baja probabilidad de
                                                fortalecerse, de ahí su relevancia.
                                                Considera elementos relacionados con
                                                el talento humano, el marco
                                                institucional, los recursos e
                                                infraestructura digital, junto con
                                                elementos de estrategia y gobernanza
                                                de la innovación en cada servicio.
                    </Card.Text>
                                            <a href="https://www.google.com/?hl=es" className="color-orange-one">ver detalle subdimensiones</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="light">
                                        <Card.Body className="borde p-5">
                                            <Card.Title className="title-resultado">PRÁCTICAS Y PROCESOS</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                Corresponde a las capacidades
                                                necesarias para el desarrollo de
                                                iniciativas de innovación. A nivel general,
                                                el Índice estimula el desarrollo de
                                                iniciativas que hayan logrado un nivel
                                                alto de madurez, es decir que hayan sido
                                                implementadas y evaluadas, idealmente.
                                                Además, considera el grado de
                                                formalización de los procedimientos y
                                                procesos de innovación basadas en la
                                                lógica del diseño de servicios, es decir de
                                                prototipado y testeo para la detección
                                                temprana de fallas.
                    </Card.Text>
                                            <a href="https://www.google.com/?hl=es" className="color-orange-one">ver detalle subdimensiones</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card border="light" >
                                        <Card.Body className="p-5">
                                            <Card.Title className="title-resultado">COLABORACIÓN Y APERTURA</Card.Title>
                                            <Card.Text className="descripcion-resultado">
                                                Considera la capacidad de interacción
                                                de los servicios públicos con su
                                                entorno, lo que les permite aprender y
                                                adaptarse a contextos cambiantes.
                                                Busca identificar el trabajo
                                                colaborativo con usuarios o
                                                beneficiarios, con otras instituciones
                                                dentro de la esfera de la
                    </Card.Text>
                                            <a onClick={() => setView(1)} className="color-orange-one">ver detalle subdimensiones</a>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center pt-4 pb-4">
                                <a href="https://www.google.com/?hl=es" className="color-orange-one">+ más información sobre las dimensiones</a>
                            </Col>
                        </Row>

                    </>
                )
            }

        </>
    )
}