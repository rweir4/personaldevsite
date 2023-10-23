'use Client'

import styles from 'app/page.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  let [hamburgerOpen, setHamburgerOpen] = useState(false);
  let [subNav, setSubNavOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  
  const toggleSubNav = () => {
    setSubNavOpen(!subNav);
  };

  return (
    <header id='header' className={styles.header}>
      <a href='/'>
        <img src='/logo-brackets.png' className={styles.bracket_logo}/>
      </a>
      <nav className={styles.navbar}>
        <a href='/'>Home</a>
        <div className={styles.subnav} onClick={toggleSubNav}>
          <a className={styles.subnavbtn}>Development</a>
          {subNav && <div className={styles.subnav_content}>
            <a href="/development/fullstack_engineer">Full Stack Engineering</a>
            <a href="/development/game_development">Game Development</a>
            <a href="/development/web_design_and_development">Web Design & Development</a>
            <a href="/development/software_projects">Software Projects</a>
          </div>}
        </div>
        <a href='/books'>Books</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
      <FontAwesomeIcon icon={faBars} className={styles.hamburger} 
        onClick={toggleHamburger}/>
      {hamburgerOpen && <nav className={styles.navbar_mobile}>
        <a href='/'>Home</a>
        <div className={styles.subnav} onClick={toggleSubNav}>
          <a className={styles.subnavbtn}>Development</a>
          {subNav && <div className={styles.subnav_content}>
            <a href="/development/fullstack_engineer">Full Stack Engineering</a>
            <a href="/development/game_development">Game Development</a>
            <a href="/development/web_design_and_development">Web Design & Development</a>
            <a href="/development/software_projects">Software Projects</a>
          </div>}
        </div>
        <a href='/books'>Books</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>}
    </header>
  );
};