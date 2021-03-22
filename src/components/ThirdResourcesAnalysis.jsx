import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubRecursos4 from "../SVG/img/Sub-Recursos-04.svg";
import { useTranslation } from 'react-i18next'

export const ThirdResourcesAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="85%" src={SubRecursos4} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}