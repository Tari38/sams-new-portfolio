import { Container } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import icon1 from "./styles/infographic/presentation.gif";
import icon2 from "./styles/infographic/communication.gif";
import icon3 from "./styles/infographic/teamwork.gif";
import icon4 from "./styles/infographic/agile.gif";
import icon5 from "./styles/infographic/adaptable.gif";
import icon6 from "./styles/infographic/contribute.gif";
import "./styles/radialWheel.css";

export default function RadialWheel() {
  
    return (
      <>
        <Container fluid className="container wheel-container">
          <nav className="wheel">
            <input
              type="checkbox"
              href="#"
              className="wheel-open"
              name="wheel-open"
              id="wheel-open"
            ></input>

            <label className="wheel-open-button" htmlFor="wheel-open">
              <h5 className="wheel-btn-text">What did I Learn?</h5>
            </label>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">Presentations</Tooltip>
              }
            >
              <button href="#presentation" className="wheel-item">
                <img
                  className="wheel-icon"
                  src={icon1}
                  alt="presentation icon"
                ></img>
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">Communication</Tooltip>
              }
            >
              <button href="#" className="wheel-item">
                <img
                  className="wheel-icon"
                  src={icon2}
                  alt="communication icon"
                ></img>
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">Teamwork</Tooltip>
              }
            >
              <button href="#" className="wheel-item">
                <img
                  className="wheel-icon"
                  src={icon3}
                  alt="teamwork icon"
                ></img>
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">Agile Methodology</Tooltip>
              }
            >
              <button href="#" className="wheel-item">
                <img
                  className="wheel-icon"
                  src={icon4}
                  alt="agile methodology icon"
                ></img>
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id="button-tooltip-2">
                  Adaptability
                </Tooltip>
              }
            >
              <button href="#" className="wheel-item">
                <img
                  className="wheel-icon"
                  src={icon5}
                  alt="adaptable icon"
                ></img>
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id="button-tooltip-2">
                  GitHub Repository Contributions
                </Tooltip>
              }
            >
              <button href="#" className="wheel-item">
                <img
                  className="wheel-icon"
                  src={icon6}
                  alt="contributing to GitHub repositories"
                ></img>
              </button>
            </OverlayTrigger>
          </nav>
        </Container>
      </>
    );
  }
