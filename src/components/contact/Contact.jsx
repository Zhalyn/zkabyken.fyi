import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);

  function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm(
          'service_9vyz45o', 
          'template_lompez4', 
          e.target, 
          'user_sD4Mn50epiAOgGD6JsVoO'
      ).then(res=>{
          console.log(res);
      }).catch(err=>console.log(err));
      setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="email" name = "email" placeholder="Email" />
          <textarea name = "message" c placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply as soon as possible :)</span>}
        </form>
      </div>
    </div>
  );
}