import React from 'react';
import styles from './Footer.module.css'
import { CgGym } from 'react-icons/cg';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'; 
import { FaInstagramSquare, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
  <>
    <div className={styles.wrapper}>
        <div className={styles.box1}>
            <CgGym className={styles.logo}/>
            <p>Stay fit and healthy with our premium gym services. Join us today!</p>
            <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook className={styles.icon}/></a> 
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className={styles.icon}/></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle className={styles.icon}/></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className={styles.icon}/></a>
          </div>
        </div>
        <div className={styles.box2}>
            <h4>Healthy Living</h4>
            <li>Nutrition Tips</li>
            <li>Fitness Articles</li>
            <li>Healthy Recipes</li>
        </div>
        <div className={styles.box3}>
            <h4>Services</h4>
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Cardio Equipment</li>
        </div>
        <div className={styles.box4}>
            <h4>Contact Us</h4>
            <li><FaPhone/> Phone No. : 0510-284672</li>
            <li><FaEnvelope/> Email Id : info@fithub.com</li>
            <li><FaMapMarkerAlt/> Address : 432 Sadar Street, Bhopal, M.P.</li>
        </div>
    </div>
    <h5>&copy; 2023 All Rights reserved to PrachiiGuptaa</h5>
    </>
  )
}

export default Footer