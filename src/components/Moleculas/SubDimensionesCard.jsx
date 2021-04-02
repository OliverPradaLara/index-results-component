import { Row, Col, Card } from 'react-bootstrap'

//Componentes
import AnalisisAcordion from './AnalisisAcordion';



const SubDimensionesCard = ({ imagen, titulo, descripcion, textolink, onclick, titulointerpretaciongrafico, descripcioninterpretaciongrafico ,analisistexto  }) => (
    <Col md={4} className="interpretation-card dimensions-cards">
        <Row className="centerGraphicDimesions">
            <div className="tabResponsive">
                <img width="80%" src={ imagen } alt={ titulo } />
            </div>
        </Row>
        <Row className="row-a-dimensions-top">
            <Col>
                <Card.Title className="title-resultado">{ titulo }</Card.Title>
                <Card.Text className="descripcion-resultado">
                    { descripcion }
                </Card.Text>
            </Col>
        </Row>
        <Row className="row-a-dimensions-bottom">
            <Col className="col-a-dimensions">
                <div className="text-center isDesktop">
                    <a href="/#" onClick={ onclick } className="color-orange-one">{ textolink }</a>
                </div>
                <AnalisisAcordion titulo={ titulointerpretaciongrafico } descripcion={ descripcioninterpretaciongrafico } analisis={ analisistexto } />
            </Col>
        </Row>
    </Col>
)
export default SubDimensionesCard;