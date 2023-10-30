export default function Payment() {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <h1>Payment Details</h1>
      <hr className="left" />
      <form className="payment-form">
        <label className="label-style">
          Name <input type="text" required />
        </label>
        <label className="label-style">
          Email <input type="text" required />
        </label>
        <label className="label-style">
          Card Number <input type="text" required />
        </label>
        <div className="payment-form label-container-small">
          <label className="label-style margin-right">
            Expiration <input type="text" required />
          </label>
          <label className="label-style">
            CVC <input type="text" required />
          </label>
        </div>
        <button>Buy</button>
      </form>
    </>
  )
}
