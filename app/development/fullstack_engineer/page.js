import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function FullstackEngineer() {
  return (
    <main className={styles.main}>
      <h1>Full Stack Engineering</h1>
      <div className={styles.professional}>
        <div>
          <img src='/medidata.png' alt='medidata'/>
          <h3>Medidata Solutions, A Dassault Systemes Company</h3>
          <a href='/development/medidata' className={styles.secondary_btn}>See More</a>
        </div>
        <div>
          <img src='/vimeo.png' alt='vimeo'/>
          <h3>Vimeo, Inc.</h3>
          <a href='/development/vimeo' className={styles.secondary_btn}>See More</a>
        </div>
      </div>
    </main>
  )
}