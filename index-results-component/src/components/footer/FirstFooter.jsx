import React from 'react'

//import Css
import "../../css/footer/firstfooter/style.css"

import cloud from '../../SVG/img/download.png'


export const UpFooter = () => {
    return (
        <>
            <div className="contenedor-first-footer">
                <div className="contenedor">
                    <div className="descargas">
                        <div className="imagen">
                            <img src={cloud} alt="Cloud" />
                        </div>
                        <div className="titulo">
                            <h4>Descargas</h4>
                        </div>
                        <div className="descripcion">
                            <p>(todos los documentos)</p>
                        </div>
                    </div>
                    <div className="lista">
                        <ul>
                            <li><i className="fas fa-chevron-right color-orange-one"></i> <span className="underline">Base de datos</span> <span>(.csv)</span></li>
                            <li><i className="fas fa-chevron-right color-orange-one"></i> <span className="underline">Nota técnica de resultados</span> <span>(.pdf)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}