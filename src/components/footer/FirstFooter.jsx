import React from 'react'
import cloud from '../../SVG/img/download.png'
import { useTranslation } from 'react-i18next'

export const UpFooter = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="contenedor-first-footer">
                <div className="contenedor">
                    <div className="descargas">
                        <div className="imagen">
                            <img src={cloud} alt="Cloud" />
                        </div>
                        <div className="titulo">
                            <h4>{t("downloads")}</h4>
                        </div>
                        <div className="descripcion">
                            <p>({t("all_docs")})</p>
                        </div>
                    </div>
                    <div className="lista">
                        <ul>
                            <li><i className="fas fa-chevron-right color-orange-one"></i> <span className="underline">{t("database")}</span> <span>(.csv)</span></li>
                            <li><i className="fas fa-chevron-right color-orange-one"></i> <span className="underline">{t("technical_note_of_results")}</span> <span>(.pdf)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}