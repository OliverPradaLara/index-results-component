import React from 'react';
import { Row, Col, Card, CardGroup } from 'react-bootstrap'

export const TextIndex = () => {
    return (
        <Row className="justify-content-md-center">
            <Col md={12}>
                <CardGroup>
                    <Card border="light">
                    <h1>
                        Resultados del Índice
                    </h1>
                        <Card.Body>
                            Podrás conocer  los resultados del Índice de Innovación Pública, es decir el desempeño de 37 servicios públicos chilenos  en cuanto a sus capacidades para innovar. Estos resultados están agrupados por categoríasde instituciones, y podrás  acceder al detalle de cada una de las 10 subdimensiones medidas
                            </Card.Body>
                    </Card>
                </CardGroup>
            </Col>
        </Row>
    )
}