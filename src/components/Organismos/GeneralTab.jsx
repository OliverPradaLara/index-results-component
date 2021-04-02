import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

//Componenetes
import TabbedCard from '../Moleculas/TabbedCard';

//Imagenes
import Grafico1 from "../../SVG/img/Grafico1.svg";
import generales1R from "../../SVG/img/generales1R.svg";
import generales2R from "../../SVG/img/generales2R.svg";
import generales3R from "../../SVG/img/generales3R.svg";

export const GeneralTab = () => {

    const { t } = useTranslation();

    return (
        <>
            <Row className="acc-width">
                <Col md={12}>
                    <div className="p-4 comp-pad-general">
                        <p className="text-descripcion">{t("general_tittle")}</p>
                    </div>
                    <div className="graphic-acc-3">
                        <img width="80%" src={Grafico1} alt="gráfico" />
                    </div>
                </Col>
            </Row>
            <Row className=" box-dimensions-text acc-width">
                <TabbedCard 
                    imagen={ generales1R } 
                    titulo={ t("pillars") }
                    descripcion={ t("pillars_text") }
                />
                <TabbedCard 
                    imagen={ generales2R } 
                    titulo={ t("centralized") }
                    descripcion={ t("centralized_text") }
                    clase="borde"
                />

                <TabbedCard 
                    imagen={ generales3R } 
                    titulo={ t("new") }
                    descripcion={ t("new_text") }
                />
            </Row>
            <Row className="acc-width">
                <Col className="text-center pt-4 pb-4" md={12}>
                    <a href="https://www.google.com/?hl=es" className="color-orange-one">{t("more_category")}</a>
                </Col>
            </Row>
        </>
    )
}