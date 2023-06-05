import './globals.scss'
import styles from './page.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const metadata = {
  title: 'Rebecca Leigh Weir',
  description: 'Personal Developer Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header className={styles.header}>
          <img src='/brackets-rose.png' alt='brackets' className={styles.brackets}/>
          <nav className={styles.navbar}>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/about'>About</a>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <p>rebeccaweir12@gmail.com</p>
          <a href='https://www.linkedin.com/in/rebeccalweir/' className={styles.socialLinks}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.socials}/>
            <p>LinkedIn</p>
          </a>
        </footer>
      </body>
    </html>
  )
}
