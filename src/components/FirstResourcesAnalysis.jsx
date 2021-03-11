import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubRecursos2 from "../SVG/img/Sub-Recursos-02.svg";
import { useTranslation } from 'react-i18next'

export const FirstResourcesAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="p-5">
                        <p className="text-descripcion">{t("tittleDimensions")}</p>
                    </div>
                    <div>
                        <img width="85%" src={SubRecursos2} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}