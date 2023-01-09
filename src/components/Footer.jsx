import { Component } from "react";
import "./Footer.css";
import Contact from "../containers/Contact";

class Footer extends Component {
    
    render() {
        return (
            <div className="footer-container" id="contact">
                <Contact />
                <hr />
                <p>2023 © Designed and Created by Samantha Dorrell</p>
            </div>
        );
    }
}

export default Footer;


