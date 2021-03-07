import React, { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CarouselDetails = () => {
    return (
        <Row>
            <Col md={12}>
                <Carousel  interval={null}>
                    <Carousel.Item className="bg-light">
                        <Row className="d-flex justify-content-center">
                            <Col md={5} className="mt-5 mb-5">
                                <h3>COLABORACIÓN Y APERTURA</h3>
                                <p>Considera la capacidad de interacción de los servicios públicos con su entorno, lo que les permite
                                aprender y adaptarse a contextos cambiantes. Busca identificar el trabajo colaborativo con
                                usuarios o beneficiarios, con otras instituciones dentro de la esfera de la administración pública,
                                y con organizaciones que conforman el entorno organizacional. El propósito es contravenir el
                                trabajo en los silos que caracteriza a las administraciones públicas en general..</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex justify-content-center">
                            <Col md={5} className="mt-5 mb-5">
                                <h3>RECURSOS INSTITUCIONALES</h3>
                                <p>Corresponde a los aspectos más básicos o habilitantes para el desarrollo de las capacidades para
                                innovar. Sin su existencia, las siguientes dimensiones tienen baja probabilidad de fortalecerse,
                                de ahí su relevancia. Considera elementos relacionados con el talento humano, el marco
                                institucional, los recursos e infraestructura digital, junto con elementos de estrategia y
                        gobernanza de la innovación en cada servicio.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex justify-content-center">
                            <Col md={5} className="mt-5 mb-5">
                                <h3>PRÁCTICAS Y PROCESOS</h3>
                                <p>Corresponde a las capacidades necesarias para el desarrollo de iniciativas de innovación.
                                A nivel general, el Índice estimula el desarrollo de iniciativas que hayan logrado un nivel
                                alto de madurez, es decir que hayan sido implementadas y evaluadas, idealmente. Además,
                                considera el grado de formalización de los procedimientos y procesos de innovación basadas en
                                la lógica del diseño de servicios, es decir de prototipado y testeo para la detección temprana
                                de fallas.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}
