import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubColab4 from "../SVG/img/Sub-Colab-04.svg";
import { useTranslation } from 'react-i18next'

export const ThirdCollaborationAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="85%" src={SubColab4} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}