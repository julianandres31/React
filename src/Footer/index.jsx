import React from "react";
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlusG, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaGooglePlusG />
        <FaYoutube />
      </div>
      <ul className={styles.footerLinks}>
        <li>Home</li>
        <li>Noticias</li>
        <li>Servicios</li>
        <li>Nosotros</li>
        <li>Contactanos</li>
      </ul>
      <p className={styles.copy}>Copyright ©2022; Designed by FAHEEM</p>
    </footer>
  );
};

export default Footer;
