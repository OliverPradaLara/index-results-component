import React from 'react';
import { Row, Col } from 'react-bootstrap'

export const TextIndex = () => {
    return (
        <>
            <Row className="tittleText">
                <Col md={6}>
                    <h1 className="tittleColor">
                        <b>
                            Resultados del Índice
                        </b>
                    </h1>
                </Col>
            </Row>
            <Row className="tittleText mt-4 mb-5 ">
                <Col md={6}>
                    <p className="textIndex">
                        Podrás conocer  los resultados del Índice de Innovación Pública, es decir el desempeño de 37 servicios públicos chilenos  en cuanto a sus capacidades para innovar. Estos resultados están agrupados por categoríasde instituciones, y podrás  acceder al detalle de cada una de las 10 subdimensiones medidas
                    </p>
                </Col>
            </Row>
        </>
    )
}