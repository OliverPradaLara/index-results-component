

const DimensionesCard = ({ imagen, titulo, descripcion, textlink, onclick }) => (
    <Col md={4} className="interpretation-card dimensions-cards">
        <Row className="centerGraphicDimesions">
            <div className="tabResponsive">
                <img width="80%" src={ imagen } alt="gráfico" />
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
                <div className="text-center">
                    <a href="/#" onClick={ onclick } className="color-orange-one">{ textlink }</a>
                </div>
            </Col>
        </Row>
    </Col>
)

export default DimensionesCard;