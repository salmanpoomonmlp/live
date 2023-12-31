import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
     <footer className="footer-section">
  <div className="container">
   
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
           
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">services</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Expert Team</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Latest News</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div className="subscribe-form">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>Copyright © 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer