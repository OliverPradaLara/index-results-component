import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const TextIndex = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card >
                <div className="tittleText">
                    <Col md={6} sm={12} xs={12}>
                        <h1 className="tittleColor">
                            <b>{t("text_index_tittle")}</b>
                        </h1>
                    </Col>
                </div>
            </Card>
            <Card >
                <div className="tittleText mt-4 mb-5 ">
                    <Col md={8} sm={12} xs={12}>
                        <p className="textIndex">
                            {t("text_index_text")}
                        </p>
                    </Col>
                </div>
            </Card>
        </>
    )
}