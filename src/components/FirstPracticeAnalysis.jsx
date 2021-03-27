import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SubPracticas2 from "../SVG/img/Sub-Practicas-02.svg";


export const FirstPracticeAnalysis = () => {


    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="80%" src={SubPracticas2} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}