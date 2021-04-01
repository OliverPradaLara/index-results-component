import { Accordion, Card, Button } from 'react-bootstrap';


const AnalisisAcordion = ({ titulo, descripcion, analisis }) => (
    <Accordion defaultActiveKey="1">
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    { analisis }
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div>
                        <h4>{ titulo }</h4>
                    </div>
                    <div>
                        <p>{ descripcion }</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>

)

export default AnalisisAcordion;