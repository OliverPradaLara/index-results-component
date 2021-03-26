import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubRecursos5 from "../SVG/img/Sub-Recursos-05.svg";
import { useTranslation } from 'react-i18next'

export const FourthResourcesAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="80%" src={SubRecursos5} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}