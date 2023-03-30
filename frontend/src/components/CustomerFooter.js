import React from 'react'

export default function CustomerFooter() {


  const footerStyle = { 
    backgroundColor: '#780101',
  }

  return (
    <footer 
      className='d-flex justify-content-center'
      style={footerStyle}
    >
      <p className='text-white fst-italic fw-bold text'> Copyright © {new Date().getFullYear()} Petek Design </p>    
    </footer>
  )
}
