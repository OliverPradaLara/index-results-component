import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubColab2 from "../SVG/img/Sub-Colab-02.svg";
import { useTranslation } from 'react-i18next'

export const FirstCollaborationAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="85%" src={SubColab2} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}