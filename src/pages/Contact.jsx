import React from 'react'
import pizza from '../assets/heaven.jpg'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${pizza})` }}
            ></div>
            <div className="rightSide">
                <h1>Contact Me</h1>
                <form id="contact-form" metod="POST">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name..." />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Write your email..." />
                    <label htmlFor="message">Message</label>
                    <textarea
                        required
                        name="message"
                        rows="6"
                        placeholder="Write your message..."
                    />
                    <button type="submit">Send Message</button>

                </form>
                <p>
                    I'm currently looking for new opportunities. Please feel free to
                    reach out to me at <a href="mailto:upchh@example.com">hello@heaven.com</a>
                </p>

            </div>
        </div>
    )
}

export default Contact
