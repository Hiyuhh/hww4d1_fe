import React from 'react'

function About() {
  return (
    <section style={sectionStyle}>
        <h1 style={{fontSize: 60, margin: 0}}>Lucy Heartfilia</h1>
        <p>
            Lucy is a Celestial Spirit Mage, a member of the Fairy Tail Guild and one of the founding members of its sub-group, Team Natsu.
        </p>
    </section>
  )
}

const sectionStyle = {
    margin: 'auto',
    maxWidth: 800,
    padding: 20,
    fontSize: 19,
}

export default About
