import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function Projects() {
  return (
    <main className={styles.main}>
      <section>
        <h2>Professional</h2>
        <a href='#professional' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <section id='professional' className={styles.professional}>
        <a href='projects/medidata' className={styles.project_button}>
          <img src='/medidata.webp' alt='medidata' className={styles.highlight} />
        </a>
        <a href='projects/vimeo' className={styles.project_button}>
          <img src='vimeo.png' alt='vimeo' className={styles.highlight} />
        </a>        
      </section>
      <section>
        <h2>Personal</h2>
        <a href='#personal' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <section id='personal' className={styles.projects}>
        <a href='projects/developer_porfolio'>
          <img src='/keyboard.jpg' alt='computer'  
            className={styles.highlight} loading='eager'/>
          <h3 className={styles.project_title}>Developer Portfolio</h3>
        </a>
      </section>
    </main>
  )
}
