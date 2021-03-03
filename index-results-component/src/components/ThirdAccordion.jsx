import React from 'react';
import { Accordion, Card, Tab, Tabs } from 'react-bootstrap'
import { DimensionsTab } from './../views/DimensionsTab'
import { GeneralTab } from './../components/GeneralTab'

export const ThirdAccordion = () => {
    return (
        <>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <Card.Title>
                    <div>
                        <b>Resultados</b>
                    </div>
                    <div>
                        Por categorías de instituciones
                    </div>
                    <div>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                </Card.Title>
                <Card.Text>
                    A continuación, se presentan los resultados agrupados según categoría de instituciones.
                    Considerar que los resultados entre instituciones sólo son comparables si forman parte de la
                    misma categoría; éstas son: Pilares, Centralizadas o Nuevas.
                </Card.Text>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <GeneralTab/>
                        </Tab>
                        <Tab eventKey="dimensions" title="Dimensiones">
                            <DimensionsTab/>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Accordion.Collapse>
        </>
    )
}
