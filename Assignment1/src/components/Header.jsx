import React from 'react'


function Header() {
  return (
    <header style={headerStyle}>
        <h1 style={h1Style}> Lucy From Fairy Tail</h1>
    </header>
  )
}

const h1Style = {
    backgroundColor: '#000000a1',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '2.5em',
    margin: 'auto',
    marginTop: '10px',
}

const headerStyle = {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
}

export default Header