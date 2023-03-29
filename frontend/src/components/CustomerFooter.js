import React from 'react'

export default function CustomerFooter() {


  const footerStyle = { 
    backgroundColor: '#400000',
  }

  return (
    <div 
      className='d-flex justify-content-center'
      style={footerStyle}
    >
      <small className='text-secondary m-2 fst-italic text-sm'> Copyright © {new Date().getFullYear()} Petek Design  </small>    
    </div>
  )
}
