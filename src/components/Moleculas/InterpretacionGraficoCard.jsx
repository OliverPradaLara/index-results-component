
import { Col, Card } from 'react-bootstrap';
import { FirstCollaborationAnalysis } from '../FirstCollaborationAnalysis';

const InterpretacionGraficoCard = () => (
    <div className="card-interpretacion-grafico">
        <FirstCollaborationAnalysis />
        <div className="interpretation-grafico-body">
            <div className="title">
                <h4>Interpretacion del Grafico</h4>
            </div>
            <div className="description">
                <div className="texto">
                    <p>Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam auctor risus neque, at convallis velit convallis eget.</p>
                </div>
                <div className="enlace">
                    <a href="/#" className="color-orange-one" ><b><i className="fas fa-chevron-left"></i></b> Volver a Gráfico Principal</a>
                </div>
            </div>
        </div>
    </div>
    // <Card border="0" className="card-interpretacion-grafico" >
    //     <Card.Header >
    //         <FirstCollaborationAnalysis />
    //     </Card.Header>
    //     <Card.Body className="interpretation-grafico-body">
    //         <Card.Title className="title-grafico">
    //             INTERPRETACIÓN DEL GRÁFICO
    //         </Card.Title>
    //         <Card.Text className="descripcion-grafico">
    //             Mauris non mattis eros. Curabitur in ex at lorem ultricies aliquet. Pellentesque aliquet
    //             ultrices imperdiet. Fusce gravida accumsan egestas. Integer elementum, sem vitae
    //             mollis dapibus, mi nisi accumsan ipsum, eu efficitur urna sapien sed metus. Nullam
    //             auctor risus neque, at convallis velit convallis eget.
    //         </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //         <a href="/#" className="color-orange-one"><b><i className="fas fa-chevron-left"></i></b> Hola</a>
    //     </Card.Footer>
    // </Card>
)

export default InterpretacionGraficoCard;