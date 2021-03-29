import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SubRecursos2 from "../SVG/img/Sub-Recursos-02.svg";


export const FirstResourcesAnalysis = () => {

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="80%" src={SubRecursos2} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}