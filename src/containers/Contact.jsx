import "./styles/Contact.css";
// import {useState} from 'react';
import { Container } from "react-bootstrap";

// const encode = (data) => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
// }

export default function Form (){
  // const [state, setState] = useState({name: '', email: '', message: '' })

  // const handleChange = e =>
  //   setState({...state, [e.target.name]: e.target.value })

  // const handleSubmit = e => {
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'contactForm', ...state })
  //   })
  //     .then(() => alert('Thank you for getting in touch! The message was sent successfully!'))
  //     .catch(error => alert(error))
  //   e.preventDefault()
  // }

  return (
    <Container>
    <h1><span className="get"> Get</span> in <span className="contact">Contact</span></h1>
    <form 
      method='POST' 
      className='contact-form' 
      // onSubmit={handleSubmit}
      data-netlify-recaptcha="true"
      data-netlify="true">

      <input type="hidden" name="form-name" value="contactForm" />

      <input 
        type='text' 
        name='name' 
        // value={state.name}
        placeholder='Enter your name'
        // onChange={handleChange} 
        />

      <input 
        type='email' 
        name='email' 
        // value={state.email}
        placeholder='Enter your email'
        // onChange={handleChange} 
        />

      <textarea 
        name='message' 
        placeholder='Messaage'
        // value={state.message}
        // onChange={handleChange}
        ></textarea>

      <div data-netlify-recaptcha="true"></div>

      <button type='submit'>Submit</button>
    </form>
    </Container>
  )
}