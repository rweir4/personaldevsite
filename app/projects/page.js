import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function Projects() {
  return (
    <main className={styles.main}>
      <section>
        <h2>Professional</h2>
        <a href='#professional' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </section>
      <section id='professional' className={styles.professional}>
        <div>
          <h3>Vimeo, Inc.</h3>
          <img src='vimeo.jpeg' />
        </div>
        <div>
          <h3>Medidata Solutions, <br />A Dassault Systemes Company</h3>
          <img src='/medidata.jpeg' />
        </div>
      </section>
      <section>
        <h2>Personal</h2>
        <a href='#personal' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </section>
      <section id='personal' className={styles.projects}>
        <div>
          <a href='projects/developer_porfolio'>
            <img src='/keyboard.jpg' alt='computer' width='250' height='350' 
              className={styles.highlight} />
            <h3 className={styles.project_title}>Developer Portfolio</h3>
          </a>
        </div>
        <div>
          <a href='projects/calendly_mock'>
            <img src='/calendly.jpg' alt='calendlymock' width='250' height='350'
              className={styles.highlight} />
            <h3 className={styles.project_title}>Calendly Mock</h3>
          </a>
        </div>
        <div>
          <a href='projects/park'>
            <img src='/park.jpg' alt='dogwalk' width='250' height='350'
              className={styles.highlight} />
            <h3 className={styles.project_title}>Park Features</h3>
          </a>
        </div>
      </section>
    </main>
  )
}
