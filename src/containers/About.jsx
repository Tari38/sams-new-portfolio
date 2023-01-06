import "./styles/About.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import card2 from "../assets/design.png";
import card1 from "../assets/development.png";
import card4 from "../assets/deployment.png";

const About = () => {
    return (
        <Container fluid className="section-about pb-5" id="about">
            
            <h1 className="py-3 about-title">A <span className="passion">Passion</span> for <span className="design">Design</span> in <span className="code">Code</span></h1>

            
                <Row className="row">
                    <Col className="col mx-auto">
                    <Card className="card shadow-lg">
                        <Card.Img src={card1} className="card-img" />                  
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Development</Card.Title>
                                    <Card.Text className="card-text">For the Frontend, using the languages HTML, CSS, JavaScript and React, and Backend languages, such as Node.js and Python, I learnt the development process for both by using TDD (Test Driven Development). Testing was implemented with Jest, React Testing Library or Pytest.</Card.Text>
                                </Card.Body>
                    </Card>
                    </Col>
                    <Col className="col mx-auto">
                    <Card className="card shadow-lg">
                        <Card.Img src={card2} className="card-img" />                        
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Design</Card.Title>
                                    <Card.Text className="card-text">Creativity and design are just as important as the Development process. As part of my training, we worked in agile groups, consisting of designing, planning, testing and deploying web applications over a variety of projects. Figma and Canva have been a strong part of my designs.</Card.Text>
                            </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col className="col mx-auto">
                    <Card className="card shadow-lg">
                        <Card.Img src={card4} className="card-img" />                        
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Deployment</Card.Title>
                                <Card.Text className="card-text">Before we deployed our projects, they were tested first. Netlify and Heroku were used to host the projects, receiving the repositories via GitHub.
                                This portfolio is an example of a deployed repository on Netlify. </Card.Text>
                            </Card.Body>
                    </Card>
                    </Col>
                </Row>
            
        </Container>
    )
}

export default About;