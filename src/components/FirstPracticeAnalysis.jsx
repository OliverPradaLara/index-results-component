import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubPracticas2 from "../SVG/img/Sub-Practicas-02.svg";
import { useTranslation } from 'react-i18next'

export const FirstPracticeAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="text-center p-5">
                        <img width="85%" src={SubPracticas2} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}