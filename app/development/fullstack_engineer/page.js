import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function FullstackEngineer() {
  return (
    <main className={styles.main}>
      <div className={styles.professional}>
        <div className={styles.logo_left} />
        <img src='/medidata.webp' alt='medidata' />
        <div className={styles.professional_title}>
          <h3>Medidata Solutions, A Dassault Systemes Company</h3>
          <a href='/development/medidata' className={styles.secondary_btn}>See More</a>
        </div>
      </div>
      <div className={styles.professional}>
        <div className={styles.professional_title}>
          <h3>Vimeo, Inc.</h3>
          <a href='/development/vimeo' className={styles.secondary_btn}>See More</a>
        </div>
        <div className={styles.logo_right} />
        <img src='/vimeo.png' alt='vimeo' />
      </div>
    </main>
  )
}