import { Row, Col } from 'react-bootstrap'
import SubPracticas3 from "../SVG/img/Sub-Practicas-03.svg";
import { useTranslation } from 'react-i18next'

export const ThirdPracticeAnalysis = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="graphic-acc-3">
                        <img width="85%" src={SubPracticas3} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}