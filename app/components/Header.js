'use Client'

import styles from 'app/page.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  let [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header id='header' className={styles.header}>
      <a href='/'>
        <img src='/logo-brackets.png' className={styles.bracket_logo}/>
      </a>
      <nav className={styles.navbar}>
        <a href='/'>Home</a>
        <a href='/portfolio'>Portfolio</a>
        <a href='/about'>About</a>
        <a href='/work-with-me'>Work With Me</a>
      </nav>
      <FontAwesomeIcon icon={faBars} className={styles.hamburger} 
        onClick={toggleHamburger}/>
      {hamburgerOpen && <nav className={styles.navbar_mobile}>
        <a href='/'>Home</a>
        <a href='/portfolio'>Portfolio</a>
        <a href='/about'>About</a>
        <a href='/work-with-me'>Work With Me</a>
      </nav>}
    </header>
  );
};