import React from 'react'
import testPdf from '../../assets/cv/test.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={testPdf} download className='btn' >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA

