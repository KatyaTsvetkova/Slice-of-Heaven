import React from 'react'
import image from '../assets/pizza1.jpg'
import '../styles/About.css'

const About = () => {
    return (
        <div className='about'>
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Once upon a time in a small town, a poor boy named Marco dreamed of becoming a pizza master. 
                    Raised by his father, Luigi, who ran a modest pizzeria, Marco learned the artistry and love behind pizza-making.
                    As Marco grew up, he worked tirelessly, saved money, and opened his own pizza restaurant. 
                    Named "Slice of Heaven" in honor of his father, Marco's pizzeria quickly became a sensation, delighting customers with his passion-filled creations. 
                    Through hard work and gratitude, Marco transformed his humble beginnings into a renowned pizza haven, inspiring others to follow their dreams.</p>
            </div>

        </div>
    )
}

export default About
