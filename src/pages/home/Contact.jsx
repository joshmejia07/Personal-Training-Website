import { AiOutlineMail } from "react-icons/ai"
import { SlPhone, SlLocationPin } from "react-icons/sl"
import { GoClock } from "react-icons/go"
import { PiInstagramLogoFill } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"
import { FaFacebookSquare } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h1>Contact</h1>
        <hr className="center" />
        <div className="contact-inputs">
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
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
