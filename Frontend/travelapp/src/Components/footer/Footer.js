import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { FaLinkedinIn, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import './Footer.styles.css'

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h3>About Us</h3>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h3>Contact Us</h3>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h3>Videos</h3>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <ul className="social-media-desktop">
                <li>
                <a href="https://www.linkedin.com/company/travelopia/?originalSubdomain=in" target="_thapa">
                    <FaLinkedinIn className="LinkedIn" />
                </a>
                <br/>
                </li>
                <li>
                <a href="https://www.instagram.com/Travelopiagroup/" target="_thapa">
                    <FaInstagramSquare className="instagram" />
                </a>
                <br/>
                </li>
                <li>
                <a href="https://www.youtube.com/@travelopia1" target="_thapa">
                    <FaYoutubeSquare className="youtube" />
                </a>
                <br/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <small class='website-rights'>JetSetGlobe © 2023</small>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;
  