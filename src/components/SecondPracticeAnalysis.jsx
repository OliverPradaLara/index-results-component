import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubPracticas4 from "../SVG/img/Sub-Practicas-04.svg";
import { useTranslation } from 'react-i18next'

export const SecondPracticeAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="85%" src={SubPracticas4} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}