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
      <div className={styles.professional}>
        <img src='/keyboard.jpg' height="600" />
        <div className={styles.professional_title}>
          <h3>Developer Portfolio</h3>
          <button className={styles.secondary_btn}>
            <a href='https://github.com/rweir4/personaldevsite'alt='github-repo'target="_blank">Github Repo</a>
          </button>
        </div>
        <div className={styles.logo_right} />
      </div>      
      <div className={styles.professional}>
        <div className={styles.professional_title}>
          <h3>Ginny & Co Brand Shop</h3>
          <button className={styles.secondary_btn}>
          <a href='https://github.com/rweir4/doganddog' alt='github-repo' target="_blank">
            Github Repo
          </a>
          </button>
          <button className={styles.secondary_btn}>
          <a href='https://ginnyandco.herokuapp.com/' >View Ginny and Co</a>
          </button>
        </div>
        <div className={styles.logo_left} />
        <img src='/ginnyandco.png' height="600"/>
      </div>
    </main>
  )
}
