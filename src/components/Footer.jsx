import React from 'react'
import { Instagram, Facebook, YouTube } from '@mui/icons-material'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <Instagram />
      <Facebook />
      <YouTube />
      </div>
      <p> &copy; 2023 Slice of Heaven</p>
       
    </div>
  )
}

export default Footer
