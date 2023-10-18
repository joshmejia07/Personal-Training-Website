import { useState } from "react"
// Icons
import { AiOutlineMail } from "react-icons/ai"
import { SlPhone, SlLocationPin } from "react-icons/sl"
import { GoClock } from "react-icons/go"
import { PiInstagramLogoFill } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"
import { FaFacebookSquare } from "react-icons/fa"

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    setMessageSent(true)

    setTimeout(() => {
      setMessageSent(false)
    }, 5000)

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <div id="contact" className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <hr className="center" />
        <div className="contact-inputs">
          <input
            onChange={handleChange}
            name="name"
            placeholder="Name"
            value={formData.name}
            required
          />
          <input
            onChange={handleChange}
            name="email"
            placeholder="Email"
            value={formData.email}
            required
          />
        </div>
        <textarea
          onChange={handleChange}
          name="message"
          placeholder="Message"
          value={formData.message}
        ></textarea>
        {messageSent ? (
          <div className="form-submit-message">
            <h5>Message Sent</h5>
          </div>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <div className="info-container">
        <h5>Lets get in touch</h5>
        <h2>Information</h2>
        <hr className="left" />
        <p>
          <AiOutlineMail className="info-icons" />
          info@jxmfitness.com
        </p>
        <p>
          <SlPhone className="info-icons" />
          888-888-8888
        </p>
        <p>
          <SlLocationPin className="info-icons" />
          1234 Get Fit Ave
        </p>
        <p>
          <GoClock className="info-icons" />
          9am - 5pm
        </p>
        <div className="social-icon-container">
          <PiInstagramLogoFill className="social-icons" />
          <RiTwitterXFill className="social-icons" />
          <FaFacebookSquare className="social-icons" />
        </div>
      </div>
    </div>
  )
}
