import "./styles/Contact.css";
import { Container } from "react-bootstrap";

export default function Form (){
  
  return (
    <Container>
    <h1><span className="get"> Get</span> in <span className="contact">Contact</span></h1>
    <form 
      method='POST' 
      className='contact-form' 
      data-netlify-recaptcha="true"
      data-netlify="true">

      <input type="hidden" name="form-name" value="contactForm" />

      <input 
        aria-label="Enter your name"
        type='text' 
        name='name'         
        placeholder='Your name'         
        />

      <input 
        aria-label="Enter your email"
        type='email' 
        name='email'         
        placeholder='Your email'        
        />

      <textarea 
        aria-label="Enter your message"
        name='message' 
        placeholder='Your message'        
        ></textarea>

      <div data-netlify-recaptcha="true"></div>

      <button aria-label="Send Message Button" type='submit'>Send Message</button>
    </form>
    </Container>
  )
}