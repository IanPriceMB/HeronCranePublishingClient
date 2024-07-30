import React from 'react'

const EmailForm = () => {
  return (
    <main>
      <form>
        <label>Email:</label>
        <br />
        <input name="email" type='email' aria-label='eamil' />
        <label>Message:</label>
        <br />
        <input name='message' type='text' aria-label='message' />
      </form>
    </main>
  )
}

export default EmailForm