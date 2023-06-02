import styles from "app/page.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import "@fortawesome/free-brands-svg-icons/styles.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Projects</h1>
      <p className={styles.description}>As a coder and a creative writer, I believe that storytelling is capable of making a difference, and software development is another way to tell a story, whether it be the code"s, the company"s, or the customer"s.</p>
      <footer>
        <a href="https://www.linkedin.com/in/rebeccalweir/">
          <FontAwesomeIcon icon={faLinkedin} />LinkedIn
        </a>
      </footer>
    </main>
  )
}
