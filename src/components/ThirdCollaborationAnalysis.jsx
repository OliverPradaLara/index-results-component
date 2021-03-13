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
                    <div className="p-5">
                        <p className="text-descripcion">{t("tittleDimensions")}</p>
                    </div>
                    <div className="text-center p-5">
                        <img width="85%" src={SubColab4} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}