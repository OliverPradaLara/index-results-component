import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'

export const SecondAccordion = () => {
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
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => buttonHandler()}>
                            <Card.Title>
                                <div>
                                    <b>Catastro iniciativas de innovaciones desarrolladas</b>
                                </div>
                                <div>
                                    <i class="fas fa-chevron-down color-orange-one"></i>
                                </div>
                            </Card.Title>
                            <Card.Text>
                                Año de referencia 2019 - Servicios participantes
                    </Card.Text>
                        </Accordion.Toggle>
                    )
                    :
                    (
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => buttonHandler()}>
                            <Card.Title>
                                <div>
                                    <b>Catastro iniciativas de innovaciones desarrolladas</b>
                                </div>
                                <div>
                                    <i class="fas fa-chevron-up color-orange-one"></i>
                                </div>
                            </Card.Title>
                            <Card.Text>
                                Año de referencia 2019 - Servicios participantes
                    </Card.Text>
                        </Accordion.Toggle>
                    )
            }
            
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <div>
                        <img src="https://via.placeholder.com/740x460" alt="gráfico" />
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}