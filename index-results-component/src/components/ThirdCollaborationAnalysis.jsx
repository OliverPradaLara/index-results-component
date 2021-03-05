import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Grafico4 from "./../SVG/img/Grafico4.svg";

export const ThirdCollaborationAnalysis = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <div>
                        <p>Promedio de cada categoría de instituciones para las 3 dimensiones medidas en el Índice de Innovación Pública. Las
                            dimensiones tienen un puntaje máximo de 20, 40 y 40 puntos respectivamente, sumando un máximo de 100.</p>
                    </div>
                    <div>
                        <img src={Grafico4} alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={2}/>
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
                            <a href="https://www.google.com/?hl=es" className="color-orange-one">volver a gráfico principal</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <a href="https://www.google.com/?hl=es" className="color-orange-one">+ más información sobre las dimensiones</a>
                </Col>
            </Row>
        </>
    )
}