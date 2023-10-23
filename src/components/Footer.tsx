import React from 'react'

const Footer = () => {
  return (
        
    <footer className="footer">
        <div className="footer__logo">
            <img src="https://svgshare.com/i/yod.svg" alt=""/>
            <div className="footer__content">
          <div className="footer__section">
            <h4>About Us</h4>
            <p>Welcome to Your Tech Store, your one-stop destination 
                for all things tech! We are passionate about bringing the
                 latest and greatest in technology to your doorstep.
                  Our team is dedicated to providing top-notch products
                   and outstanding service to tech enthusiasts like you.</p>

          </div>
      
          <div className="footer__section">
            <h4>Tech Category</h4>
            <ul>
              <li><a href="#">Phones, Tablets & Laptops</a></li>
              <li><a href="#">PC, Peripherals & Software</a></li>
              <li><a href="#">Appliances & Air Conditioning</a></li>
              <li><a href="#">Gaming Zone</a></li>
            </ul>
          </div>
      
          <div className="footer__section">
            <h4>Contact Us</h4>
            <p>Feel free to get in touch.</p>
            <p>Email: evomarket@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        </div>
      
        <div className="footer__nav">
            <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Companie</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
              
            </ul>

            <p className="footer__copyright">
                Design by <a href="#" className="footer__link"> Flore Denis</a>   
            </p>
        </div>
    </footer>

    
  )
}

export default Footer