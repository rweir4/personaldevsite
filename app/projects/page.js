import styles from 'app/page.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import '@fortawesome/free-brands-svg-icons/styles.css'

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Projects</h1>
      <div className={styles.projects}>
        <div>
          <img src='/computer.png' alt='computer' className={styles.project_png} />
          <h3>Developer Portfolio</h3>
          <a href='https://github.com/rweir4/personaldevsite' 
            alt='github-repo'
            target="_blank">
            Github Repo
          </a>
        </div>
        <div>
          <img src='/calendlymock.png' alt='calendlymock' className={styles.project_png} />
          <h3>Calendly Mock</h3>
          <a href='https://github.com/rweir4/calendlymock' 
            alt='github-repo'
            target="_blank">
            Github Repo
          </a>
        </div>
        <div>
          <img src='/dogwalk.png' alt='dogwalk' className={styles.project_png} />
          <h3>Dog Walk Tracker</h3>
          <a href='https://github.com/rweir4/dogwalktracker' 
            alt='github-repo'
            target="_blank">
            Github Repo
          </a>
        </div>
      </div>
    </main>
  )
}
