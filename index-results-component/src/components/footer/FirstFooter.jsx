import React from 'react'



export const UpFooter = () => {
    return(
        <>
            <div className="contenedor-first-footer">
                <div className="contenedor">
                    <div className="descargas">
                        <div className="imagen">
                        <i className="far fa-cloud-download-alt"></i>
                        </div>
                        <div className="titulo">
                            <h4>Descargas</h4>
                        </div>
                        <div className="descripcion">
                            <p>(todos los documentos)</p>
                        </div>
                    </div>
                    <div className="archivos"></div>
                </div>
            </div>
        </>
    )

}