import React,{useState} from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/pizza-logo.png'
import { Link } from 'react-router-dom'
import TocIcon from '@mui/icons-material/Toc';

const Navbar = () => {
  const [openLinks,setOpenLinks] = useState(false)
  
  const toggleNavbar =()=>{
    setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact us</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact us</Link>
        <button onClick={toggleNavbar}><TocIcon /></button>

      </div>
    </div>
  )
}

export default Navbar
