import "./banner.css"
import { Container,Row,Col } from "react-bootstrap"
import bannerimg from "../../assets/bnrimg.png"
import { FaBell } from "react-icons/fa6";

const Banner = () => {
  return (
 <div>
    <Container>
        <Row>
            <Col lg={5}>
            <div className="banner_text">
                <div className="ban_inner">
                    <a href="#">Startup Business</a>
                   <div className="bell">
                   <FaBell />
                   </div>
                </div>
                <h3>Empowering startups to fuel
                    their business growth
                </h3>
                <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                velit
                nibh arcu eu. Id sem varius malesuada tincidunt sodales.
                </p>
                <div className="start_btn">
                <a href="#">Get started now </a>
                </div>
            </div>
            </Col>
            <Col lg={{span:5, offset:2}}>
            <div className="banner_img">
                <img src={bannerimg} alt="" />
            </div>
            </Col>
        </Row>
   </Container>
 </div>
  )
}

export default Banner