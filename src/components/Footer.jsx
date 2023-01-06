import { Component } from "react";
import "./Footer.css";
import Contact from "../containers/Contact";

class Footer extends Component {
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

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


