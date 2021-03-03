import React from 'react';
import { Accordion, Card } from 'react-bootstrap'

export const SecondAccordion = () => {
    return (
        <>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                <Card.Title>
                    <div>
                        <b>Catastro iniciativas de innovaciones desarrolladas</b>
                    </div>
                    <div>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                </Card.Title>
                <Card.Text>
                    Año de referencia 2019 - Servicios participantes
                    </Card.Text>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <div>
                        <img src="https://via.placeholder.com/740x460" />
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}