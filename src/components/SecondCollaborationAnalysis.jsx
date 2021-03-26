import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import Grafico4 from "../SVG/img/Grafico4.svg";
import { useTranslation } from 'react-i18next'

export const SecondCollaborationAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="80%" src={Grafico4} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}