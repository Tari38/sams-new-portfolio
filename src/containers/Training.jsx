import { Container } from "react-bootstrap";
import RadialWheel from "../components/radialWheel/radialWheel";
import "./styles/Training.css";


const Training = () => {
    return (
        <Container fluid className="section-training p-4 mx-auto" id="training">
            
            <h1 className="py-3 training-title">An <span className="eagerness">Eagerness</span> to <span className="learn">Learn</span> and <span className="contribute">Contribute</span></h1>
                      
            <RadialWheel />
            
        </Container>
    )
}

export default Training;