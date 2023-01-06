import { Container } from "react-bootstrap";

const ContactForm = () => {
 
  return (
    <Container id="contact">
      <h1><span className="get"> Get</span> in <span className="contact">Contact</span></h1>
        <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
          <label class="message" htmlFor="message-input">Your Message</label>
          <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

          <label class="message-name" htmlFor="message-name">Your Name</label>
          <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

          <label class="message-email" htmlFor="message-email">Your Email</label>
          <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

          <div className="button--container">
              <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
          </div>
      </form>
    </Container>
  );
};

export default ContactForm;