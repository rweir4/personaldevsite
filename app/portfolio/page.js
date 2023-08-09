import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function portfolio() {
  return (
    <main className={styles.main}>
      <section>
        <h2>Professional</h2>
        <a href='#professional' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <section id='professional'>
        <div className={styles.professional}>
          <div className={styles.logo_left} />
          <img src='/medidata.webp' alt='medidata' className={styles.highlight} />
          <div className={styles.professional_title}>
            <h3>Medidata Solutions, A Dassault Systemes Company</h3>
            <button className={styles.secondary_btn}>
              <a href='portfolio/medidata'>See More</a>
            </button>
          </div>
        </div>
        <div className={styles.professional}>
          <div className={styles.professional_title}>
            <h3>Vimeo, Inc.</h3>
            <button className={styles.secondary_btn}>
              <a href='portfolio/vimeo'>See More</a>
            </button>
          </div>
          <div className={styles.logo_right} />
          <img src='vimeo.png' alt='vimeo' className={styles.highlight} />
        </div>
        <div className={styles.professional}>
          <div className={styles.logo_left} />
          <h3 className={styles.freelance_title}>Freelance</h3>
          <div className={styles.professional_title}>
            <h3>Freelance Design & Development</h3>
            <button className={styles.secondary_btn}>
              <a href='portfolio/freelance'>See More</a>
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2>Personal</h2>
        <a href='#personal' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <section id='personal' className={styles.portfolio}>
        <a href='portfolio/developer_porfolio'>
          <img src='/keyboard.jpg' alt='computer'  
            className={styles.highlight} loading='eager'/>
          <h3 className={styles.project_title}>Developer Portfolio</h3>
        </a>        
        <a href='portfolio/ginnyandcoMock'>
          <img src='/park.jpg' alt='park'  
            className={styles.highlight} loading='eager'/>
          <h3 className={styles.project_title}>Ginny and Co. Brand Shop</h3>
        </a>
      </section>
    </main>
  )
}
