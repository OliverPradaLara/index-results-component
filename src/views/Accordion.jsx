import React from 'react';
import { Accordion, Row, Col } from 'react-bootstrap';
import { FirstAccordion } from './../components/FirstAccordion';
import { SecondAccordion } from './../components/SecondAccordion';
import { ThirdAccordion } from './../components/ThirdAccordion';

export const AccordionComponent = () => {
    return (
        <Row className="acc-width acc-margin-row">
            <Col md={12} className="acc-padding-col" >
                <Accordion  defaultActiveKey="0" >
                    <FirstAccordion />
                </Accordion>
                <Accordion defaultActiveKey="0" >
                    <SecondAccordion />
                </Accordion>
                <Accordion defaultActiveKey="0"  >
                    <ThirdAccordion />
                </Accordion>
            </Col>
        </Row>
    );

}