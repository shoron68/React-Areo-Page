import "./footer.css"
import { Col, Container, Row } from "react-bootstrap"
import { FaBaseballBall } from "react-icons/fa";

const Bottttom = () => {
  return (
    <Container>
        <div className="footer_main">
        <Row>
            <Col lg={4}>
           <div className="box">
           <h5>Immediate Deployment</h5>
            <p>
                Et vero eos et accusamus et 
                iusto odio dignissimos
            </p>
            <div className="ball">
            <FaBaseballBall />
            </div>
           </div>
            </Col>
            <Col lg={4}>
           <div className="box">
           <h5>Immediate Deployment</h5>
            <p>
                Et vero eos et accusamus et 
                iusto odio dignissimos
            </p>
            <div className="ball">
            <FaBaseballBall />
            </div>
           </div>
            </Col>
            <Col lg={4}>
           <div className="box">
           <h5>Immediate Deployment</h5>
            <p>
                Et vero eos et accusamus et 
                iusto odio dignissimos
            </p>
            <div className="ball">
            <FaBaseballBall />
            </div>
           </div>
            </Col>
        </Row>
        </div>
    </Container>
  )
}

export default Bottttom