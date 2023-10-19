import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function development() {
  return (
    <main className={styles.main}>
      <a href='development/fullstack_engineer'>Full Stack Engineering</a>
      <a href='development/game_development'>Game Development</a>
      <a href='development/web_design_and_development'>Web Design & Development</a>
      <a href='development/software_projects'>Software Projects</a>
    </main>
  )
}
