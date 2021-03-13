import { Row, Col } from 'react-bootstrap'
import SubPracticas3 from "../SVG/img/Sub-Practicas-03.svg";
import { useTranslation } from 'react-i18next'

export const ThirdPracticeAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="p-5">
                        <p className="text-descripcion">{t("tittleDimensions")}</p>
                    </div>
                    <div className="text-center p-5">
                        <img width="85%" src={SubPracticas3} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}