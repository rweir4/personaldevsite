import styles from 'app/page.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import '@fortawesome/free-brands-svg-icons/styles.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Projects</h1>
      <footer>
        <a href='https://www.linkedin.com/in/rebeccalweir/'>
          <FontAwesomeIcon icon={faLinkedin} />LinkedIn
        </a>
      </footer>
    </main>
  )
}
