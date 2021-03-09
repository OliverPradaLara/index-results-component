import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const TextIndex = () => {
    const { t } = useTranslation();
    return (
        <>
            <Row className="tittleText">
                <Col md={6}>
                    <h1 className="tittleColor">
                        <b>
                            {t("text_index_tittle")}
                        </b>
                    </h1>
                </Col>
            </Row>
            <Row className="tittleText mt-4 mb-5 ">
                <Col md={6}>
                    <p className="textIndex">
                        {t("text_index_text")}
                    </p>
                </Col>
            </Row>
        </>
    )
}