import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'

export const FirstAccordion = () => {
    const [drop, setDrop] = useState(false)

    const buttonHandler = () => {
        drop === true ? setDrop(false) : setDrop(true)
        console.log({drop})
    }

    return (
        <>
            {
                drop === false ?
                    (
                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick={() => buttonHandler()}>
                            <Card.Title>
                                <div>
                                    <b>Cantidad de servicios públicos </b>
                                            | Según rango de puntaje total del índice
                                            <i className="fas fa-chevron-down color-orange-one" />
                                </div>
                            </Card.Title>
                            <Card.Text>
                                Año de referencia 2019 - 37 servicios participantes
                            </Card.Text>
                        </Accordion.Toggle>
                    )
                    :
                    (

                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick={() => buttonHandler()}>
                            <Card.Title>
                                <div>
                                    <b>Cantidad de servicios públicos</b>
                                            | Según rango de puntaje total del índice sobre un máximo de 100 puntos.
                                    <i className="fas fa-chevron-up color-orange-one" />
                                </div>
                            </Card.Title>
                            <Card.Text>
                                Año de referencia 2019 - 37 servicios participantes
                            </Card.Text>
                        </Accordion.Toggle>
                    )
            }
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div>
                        <img src="https://via.placeholder.com/740x260" alt= "gráfico" />
                    </div>
                    <div>
                        <a href="https://www.google.com/?hl=es" className="color-orange-one">+ ver servicios públicos participantes</a>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}