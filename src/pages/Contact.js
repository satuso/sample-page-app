import React, { useState } from "react"

const Contact = () => {
  const [message, setMessage] = useState("Send us a message.")
  const [show, setShow] = useState(true)

  const submitForm = () => {
    setMessage("Thank you for your message!")
    setShow(false)
  }

  return (
    <main>
      <h3>Contact Us</h3>
      <p>{message}</p>
      {show && <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          minLength={3}
        />
        <input
          type="email"
          placeholder="Email"
          minLength={3}
        />
        <textarea
          type="text"
          placeholder="Message"
          minLength={3}
        />
        <button type="submit">Send</button>
      </form>}
    </main>
  )
}

export default Contact