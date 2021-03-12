import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import SubRecursos3 from "../SVG/img/Sub-Recursos-03.svg";
import { useTranslation } from 'react-i18next'

export const SecondResourcesAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="p-5">
                        <p className="text-descripcion">{t("tittleDimensions")}</p>
                    </div>
                    <div>
                        <img width="85%" src={SubRecursos3} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}