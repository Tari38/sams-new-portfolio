import { Col, Container, Image, Row } from "react-bootstrap";
import { CSS3, DJANGO, EXPRESS, FLASK, GIT2, HEROKU, HTML5, JEST, JS, MONGO, NETLIFY, NODE, POSTGRES, PYTHON, REACT, REDUX } from "../assets/skills";
import github from "../assets/icons/github.png";
import "./styles/Technical.css";

const Technical = () => {
    return (
        <Container fluid className="section-technical pb-5 mx-auto" id="technical">
            <h1 className="pt-4 pb-4 technical-title">A<span className="love"> Love</span> of <span className="learn">Learning</span></h1>

            <Row className="row">
                <Col className="col mx-auto">
                    <Image className="skill-icon" src={GIT2}></Image>
                    <h6>Git</h6>
                </Col>
                <Col className="col mx-auto">
                    <Image className="skill-icon" src={github}></Image>
                    <h6>GitHub</h6>
                </Col>
                <Col className="col mx-auto">
                    <Image className="skill-icon" src={NODE}></Image>
                    <h6>Node.js</h6>
                </Col>
                
            </Row>
            <Row className="row">
                <Col className="col mx-auto">
                <Image className="skill-icon" src={EXPRESS}></Image>
                    <h6>Express.js</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={JS}></Image>
                    <h6>JavaScript</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={CSS3}></Image>
                    <h6>CSS</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={HTML5}></Image>
                    <h6>HTML</h6>
                </Col>
            </Row>
            <Row className="row">
                <Col className="col mx-auto">
                <Image className="skill-icon" src={REACT}></Image>
                    <h6>React.js</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={REDUX}></Image>
                    <h6>Redux</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={PYTHON}></Image>
                    <h6>Python</h6>
                </Col>
            </Row>
            <Row className="row">
                <Col className="col mx-auto">
                <Image className="skill-icon" src={FLASK}></Image>
                    <h6>Flask</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={DJANGO}></Image>
                    <h6>Django</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={POSTGRES}></Image>
                    <h6>PostgreSQL</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={MONGO}></Image>
                    <h6>MongoDB</h6>
                </Col>
            </Row>
            <Row className="row">
                <Col className="col mx-auto">
                <Image className="skill-icon" src={JEST}></Image>
                    <h6>Jest</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={HEROKU}></Image>
                    <h6>Heroku</h6>
                </Col>
                <Col className="col mx-auto">
                <Image className="skill-icon" src={NETLIFY}></Image>
                    <h6>Netlify</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Technical;