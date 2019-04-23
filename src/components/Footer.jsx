/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const FooterSection = () => (
  <section className="section-footer">
    <footer className="footer">
      <div className="footer-logo-box">
        <Logo />
      </div>

      <div className="footer-content">
        <div className="footer-content__left">
          <ul className="footer-content__left--ul">
            <li className="footer-ul-li"><Link to="/home" className="footer-link">About us</Link></li>
            <li className="footer-ul-li"><Link to="/home" className="footer-link">Contact us</Link></li>
            <li className="footer-ul-li"><Link to="/home" className="footer-link">Privacy policy</Link></li>
            <li className="footer-ul-li"><Link to="/home" className="footer-link">Terms</Link></li>
          </ul>
        </div>
        <div className="footer-content__right">
          <p className="footer-content__right-copyright">
            Built by
            {' '}
            <Link to="/home" className="footer-link">Eneja Kingsley</Link>
  . Copyright &copy; by Eneja Kingsley. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Voluptatibus magnam eveniet vero corporis, repellat modi ducimus deleniti
            voluptatum a hic qui excepturi veritatis totam iste quos ullam est sunt omnis.
          </p>
        </div>
      </div>
    </footer>
  </section>
);

export default FooterSection;
