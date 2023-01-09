// import React, { Component } from 'react';
// import axios from 'axios';
// import { Container } from "react-bootstrap";
import "./styles/Contact.css";

// class Contact extends Component {

//     state = {
//         name: '',
//         message: '',
//         email: '',
//         sent: false,
//         buttonText: 'Send Message'
//     }
//     formSubmit = (e) => {
//         e.preventDefault()
      
//         this.setState({
//             buttonText: '...sending'
//         })
      
//         let data = {
//             name: this.state.name,
//             email: this.state.email,
//             message: this.state.message
//         }
        
//         axios.post('/', data)
//         .then( res => {
//             this.setState({ sent: true }, this.resetForm())
//         })
//         .catch( () => {
//           console.log('Message not sent')
//         })
//       }
//       resetForm = () => {
//         this.setState({
//             name: '',
//             message: '',
//             email: '',
//             buttonText: 'Message Sent'
//         })
//     }

//     render() {
//         return(
//             <Container>
//             <h1><span className="get"> Get</span> in <span className="contact">Contact</span></h1>
//               <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
      
//                 <label className="message-name" 
//                 htmlFor="message-name">Name</label>

//                 <input aria-label="Enter your full name"
//                 onChange={e => this.setState({ name: e.target.value})} 
//                 name="name" 
//                 className="message-name" 
//                 type="text" 
//                 placeholder="Your Full Name" 
//                 required
//                 value={this.state.name}/>
      
//                 <label className="message-email" htmlFor="message-email">Email</label>

//                 <input aria-label='Enter you email address' 
//                 onChange={(e) => this.setState({ email: e.target.value})} 
//                 name="email" 
//                 className="message-email" 
//                 type="email" 
//                 placeholder="your@email.com" 
//                 required 
//                 value={this.state.email} />
      
//                 <label className="message" htmlFor="message-input">Message</label>

//                 <textarea onChange={e => this.setState({ message: e.target.value})} 
//                 name="message" 
//                 className="message-input" 
//                 type="text" 
//                 placeholder="Please write your message here" 
//                 required
//                 value={this.state.message} />
                
//                 <div className="button-container">
//                     <button type="submit" className="button">{ this.state.buttonText }</button>
//                 </div>
//             </form>
//           </Container>
//         );
//     }
// }

// export default Contact;

import {useState} from 'react';
import { Container } from "react-bootstrap";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

export default function Form (){
  const [state, setState] = useState({name: '', email: '', message: '' })

  const handleChange = e =>
    setState({...state, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...state })
    })
      .then(() => alert('Thank you for getting in touch! The message was sent successfully!'))
      .catch(error => alert(error))
    e.preventDefault()
  }

  return (
    <Container>
    <h1><span className="get"> Get</span> in <span className="contact">Contact</span></h1>
    <form 
      className='contact-form' 
      onSubmit={handleSubmit}
      data-netlify="true">

      <input type="hidden" name="form-name" value="contactForm" />

      <input 
        type='text' 
        name='name' 
        value={state.name}
        placeholder='Enter your name'
        onChange={handleChange} />

      <input 
        type='email' 
        name='email' 
        value={state.email}
        placeholder='Enter your email'
        onChange={handleChange} />

      <textarea 
        name='message' 
        placeholder='Messaage'
        value={state.message}
        onChange={handleChange}></textarea>
      <button type='submit'>Submit</button>
    </form>
    </Container>
  )
}