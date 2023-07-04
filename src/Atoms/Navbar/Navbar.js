import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [isShow, setIsShow] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  function handleJoinUs() {
    setIsShow(true); // Close the menu bar when Join Us button is clicked
    navigate('/registration');
  }

  function handleHomeClick() {
    setIsShow(true); // Close the menu bar when Home link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav>
      <Link to="/" onClick={handleHomeClick}>
        <CgGym className={styles.logo} />
      </Link>
      {isHomePage && (
        <>
          <div className={styles.menu}>
            {isShow ? (
              <FaBars onClick={() => setIsShow(false)} />
            ) : (
              <AiOutlineClose onClick={() => setIsShow(true)} />
            )}
          </div>
          <ul className={styles.navbar} id={isShow ? '' : styles.menu}>
            <li>
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsShow(true)}> {/* Close the menu bar on About link click */}
                About
              </Link>
            </li>
            <li>
              <a href="#programs" onClick={() => setIsShow(true)}> {/* Close the menu bar on Programs link click */}
                Programs
              </a>
            </li>
            <li>
              <a href="#trainers" onClick={() => setIsShow(true)}> {/* Close the menu bar on Trainers link click */}
                Trainers
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setIsShow(true)}> {/* Close the menu bar on Pricing link click */}
                Pricing
              </a>
            </li>
          </ul>
          <div className={styles.profile}>
            <button className={styles.joinUsBtn} onClick={handleJoinUs}>
              Join Us
            </button>
          </div>
        </>
      )}
      {!isHomePage && (
        <>
        <div className={styles.menu}>
            {isShow ? (
              <FaBars onClick={() => setIsShow(false)} />
            ) : (
              <AiOutlineClose onClick={() => setIsShow(true)} />
            )}
          </div>
          <ul className={styles.navbar} id={isShow ? '' : styles.menu}>
            <li>
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsShow(true)}> {/* Close the menu bar on About link click */}
                About
              </Link>
            </li>
          </ul>
          <div className={styles.profile}>
            <button className={styles.joinUsBtn} onClick={handleJoinUs}>
              Join Us
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
