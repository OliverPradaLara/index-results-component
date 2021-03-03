import React from 'react';
import { Accordion, Card } from 'react-bootstrap'

export const FirstAccordion = () => {
    return (
        <>
            <Accordion.Toggle as={Card.Header} eventKey="2">
                <Card.Title>
                    <div>
                        <b>Cantidad de servicios públicos</b>
                    </div>
                    <div>
                        | Según rango de puntaje total del índice un máximo de 100 puntos.
                    </div>
                    <div>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                </Card.Title>
                <Card.Text>
                    Año de referencia 2019 - 37 servicios participantes
        </Card.Text>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div>
                        <img src="https://via.placeholder.com/740x260" />
                    </div>
                    <div>
                        <a href="">ver servicios públicos participantes</a>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}