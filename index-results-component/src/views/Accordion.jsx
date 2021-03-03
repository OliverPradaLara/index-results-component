import React from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import { FirstAccordion } from './../components/FirstAccordion'
import { SecondAccordion } from './../components/SecondAccordion'
import { ThirdAccordion } from './../components/ThirdAccordion'

export const AccordionComponent = () => {
    return (
        <Row>
            <Col md={12}>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <FirstAccordion />
                    </Card>
                    <Card>
                        <SecondAccordion />
                    </Card>
                    <Card>
                        <ThirdAccordion />
                    </Card>
                </Accordion>
            </Col>
        </Row>
    );

}