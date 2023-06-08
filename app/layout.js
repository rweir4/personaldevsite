import './globals.scss'
import styles from './page.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Rebecca Leigh Weir',
  description: 'Personal Developer Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header id='header' className={styles.header}>
          <img src='/brackets-rose.png' alt='brackets' className={styles.brackets}/>
          <nav className={styles.navbar}>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/about'>About</a>
          </nav>
        </header>
        {children}
        <a href='#header' title='Scroll To Top'>
          <FontAwesomeIcon icon={faChevronUp} className={styles.totoparrow} />
        </a>
        <footer className={styles.footer}>
          <p>rebeccaweir12@gmail.com</p>
          <a href='https://github.com/rweir4' className={styles.socialLinks} target='_blank'>
            <FontAwesomeIcon icon={faGithub} className={styles.socials} />
            <p>Github</p>
          </a>
          <a href='https://www.linkedin.com/in/rebeccalweir/' className={styles.socialLinks} target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className={styles.socials} />
            <p>LinkedIn</p>
          </a>
        </footer>
      </body>
    </html>
  )
}
