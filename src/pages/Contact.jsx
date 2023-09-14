export default function Contact() {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h1>Contact</h1>
        <div className="contact-inputs">
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
      <div>
        <h4>Lets get in touch</h4>
        <h2>Information</h2>
        <hr className="left" />
        <p>info@jxmfitness.com</p>
        <p>888-888-8888</p>
        <p>1234 Get Fit Ave</p>
        <p>9am - 5pm</p>
      </div>
    </div>
  )
}
