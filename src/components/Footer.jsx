import { Component } from "react";
import "./Footer.css";
import Contact from "../containers/Contact";

class Footer extends Component {
    
    render() {
        return (
            <div className="footer-container" id="contact">
                <Contact />
                <hr />
                <p>Samantha Dorrell 2023</p>
            </div>
        );
    }
}

export default Footer;


