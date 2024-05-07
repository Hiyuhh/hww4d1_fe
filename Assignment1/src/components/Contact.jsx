import React from 'react'

function Contact() {
  return (
    <footer style={footerStyle}>
        <h3 style={{marginTop: 40}}>Contact Us</h3>
        <p style={{marginTop: 10}}>Email: Fairytail@guilds.com</p>
    </footer>
  )
}

const footerStyle = {
    textAlign: "center",
    position: "relative",
    bottom: 0,
    padding: 20,
}

export default Contact
