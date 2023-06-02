import './globals.css'
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
        <nav>
          <niv className={styles.menu}>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/about'>About</a>
          </niv>
        </nav>
        {children}
        <footer className={styles.footer}>
          <a href='https://www.linkedin.com/in/rebeccalweir/' className={styles.socialLinks}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.socials}/>
            <p>LinkedIn</p>
          </a>
        </footer>
      </body>
    </html>
  )
}
