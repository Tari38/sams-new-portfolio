import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { StoryMashups, RiskyQuizness, HabiTrax, ArtemisCamping, Battleship, NodeChat, Quotes, NodeContactForm } from "../assets/projects";
import "./styles/Projects.css";


function Projects() {
    return (
        <>
        <Container fluid className="section-projects pb-5 mx-auto" id="projects">
            <h1 className="pt-4 projects-title">Group <span className="projects">Projects</span> & Solo <span className="creations">Creations</span></h1>

            <h3 className="pt-2 projects-title">Group Projects</h3>
            <p className="pt-2 pb-3 projects-title">Created during training in Futureproof</p>
                <Row className="row">
                    <Col className="col mx-auto">
                        <Card className="card shadow-lg">
                            <Card.Img src={StoryMashups} className="project-img" />
                                
                            <Button href="https://github.com/Tari38/FP-Story-Mashups" className="github-project-link" target="_blank"></Button>
                                
                                                 
                                <Card.Body className="card-body">
                                    <Card.Title className="project-title">Story Mashups</Card.Title>
                                        <Card.Text className="project-text">A creative writing app for children.</Card.Text>

                                        <div>                        
                                            <Button className="project-btn netlify-link shadow-lg" href="https://fp-story-mashups.netlify.app/index.html" rel="noreferrer" target="_blank">Go to Story Mashups!</Button>                    
                                        </div>     
                                </Card.Body>
                        </Card>
                    </Col>


                    <Col className="col mx-auto">
                    <Card className="card shadow-lg">
                        <Card.Img src={HabiTrax} className="project-img" />               
                        <Button href="https://github.com/Tari38/Tari38-fp_lap2_project_client" className="github-project-link" target="_blank"></Button>         
                            <Card.Body className="card-body">
                                <Card.Title className="project-title">HabiTrax</Card.Title>
                                    <Card.Text className="project-text">A personal habit tracker.</Card.Text>
                                    <div>                        
                                        <Button className="project-btn netlify-link shadow-lg" href="https://habit-tracker-project-two.netlify.app/" rel="noreferrer" target="_blank">Go to Habi-Trax!</Button>                                             
                                    </div>    
                            </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col className="col mx-auto">
                    <Card className="card shadow-lg">
                        <Card.Img src={RiskyQuizness} className="project-img" />                       
                        <Button href="https://github.com/Tari38/LAP-3_Team-Project_Quiz-App" className="github-project-link" target="_blank"></Button>    
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Risky Quizness</Card.Title>
                                <Card.Text className="card-text">A trivia quiz app inspired from the 80's film, Risky Business.</Card.Text>
                                <div>                        
                                    <Button className="project-btn netlify-link shadow-lg" href="https://risky-quizness.netlify.app/" rel="noreferrer" target="_blank">Go to Risky Quizness!</Button>                                             
                                </div>  
                            </Card.Body>
                    </Card>
                    </Col>
                    <Col className="col mx-auto">
                    <Card className="card shadow-lg">
                        <Card.Img src={ArtemisCamping} className="project-img" /> 
                        <Button className="github-project-link" href="  
                        https://github.com/Tari38/artemis-frontend" rel="noreferrer" target="_blank"></Button>       
                            <Card.Body className="card-body">
                                <Card.Title className="project-title">Artemis Camping</Card.Title>
                                <Card.Text className="project-text">An organisation app for camping and hiking.</Card.Text>
                                <div>                        
                                    <Button className="project-btn netlify-link shadow-lg" href="https://artemis-camping.netlify.app/" rel="noreferrer" target="_blank">Go to Artemis Camping!</Button>                                             
                                </div>  
                            </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <hr />
                <h3 className="pt-2 projects-title">Solo Projects</h3>

                <Row>
                <Col className="col mx-auto">
                        <Card className="card shadow-lg">
                            <Card.Img src={Battleship} className="project-img" />
                                
                            <Button href="https://github.com/Tari38/socket.io-battleship-game" className="github-project-link" target="_blank"></Button>
                                
                                                 
                                <Card.Body className="card-body">
                                    <Card.Title className="project-title">Battleship</Card.Title>
                                        <Card.Text className="project-text">A simple game created with socket.io for single and multiplayer modes.</Card.Text>           
                                </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col mx-auto">
                        <Card className="card shadow-lg">
                            <Card.Img src={NodeChat} className="project-img" />
                                
                            <Button href="https://github.com/Tari38/socket.io-battleship-game" className="github-project-link" target="_blank"></Button>
                                
                                                 
                                <Card.Body className="card-body">
                                    <Card.Title className="project-title">Node Chat</Card.Title>
                                        <Card.Text className="project-text">A very basic messenger app using Node and Socket.io.</Card.Text>           
                                </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col mx-auto">
                        <Card className="card shadow-lg">
                            <Card.Img src={Quotes} className="project-img" />
                                
                            <Button href="https://github.com/Tari38/frontend-mentor-api-advice-slip" className="github-project-link" target="_blank"></Button>
                                
                                                 
                                <Card.Body className="card-body">
                                    <Card.Title className="project-title">API Advice Slip</Card.Title>
                                        <Card.Text className="project-text">An advice slip that is randomised via an API. I also incorporated this code into the HabiTrax project.</Card.Text>           
                                </Card.Body>
                        </Card>

                    </Col>
                    <Col className="col mx-auto">
                        <Card className="card shadow-lg">
                            <Card.Img src={NodeContactForm} className="project-img" />
                                
                            <Button href="https://github.com/Tari38/Node-contact-form" className="github-project-link" target="_blank"></Button>
                                
                                                 
                                <Card.Body className="card-body">
                                    <Card.Title className="project-title">Node Contact Form</Card.Title>
                                        <Card.Text className="project-text">A Node API ready to use for a basic contact form.</Card.Text>           
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
        </>
    )
}

export default Projects;