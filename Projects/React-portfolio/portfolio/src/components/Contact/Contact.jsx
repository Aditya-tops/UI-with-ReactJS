import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/mail_icon.png"
import phone_icon from "../../assets/phone_icon.png"
import location_icon from "../../assets/location_icon.webp"

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a2469ec3-5b46-46d4-9ad1-cecd97608c15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A fuga necessitatibus repellat, reiciendis quod neque, illum tenetur, optio ipsam impedit fugiat harum quam nobis nostrum.</p>
          <div className="contact-details">
          <div className="contact-detail">
            <img src={mail_icon} alt="" height="50px" /> <p>adityapatel@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={phone_icon} alt="" height="40px" /><p>+91 9426388612</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" height="50px" /><p>Ahmedabad, Gujarat</p>
            
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Enter your name</label>
          <input type="text" placeholder='Enter your name ' name='name' />

          <label htmlFor="email">Enter your email</label>
          <input type="email" placeholder='Enter your name ' name='email' />

          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows="8" placeholder='Enter your message'></textarea>
         
          <button type="submit" className="contact-submit">Submit Now </button>

      </form>
    </div>
      </div>
      
  )
}

export default Contact
