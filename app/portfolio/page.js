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
          <img src='/medidata.webp' alt='medidata' />
          <div className={styles.professional_title}>
            <h3>Medidata Solutions, A Dassault Systemes Company</h3>
            <a href='portfolio/medidata' className={styles.secondary_btn}>See More</a>
          </div>
        </div>
        <div className={styles.professional}>
          <div className={styles.professional_title}>
            <h3>Vimeo, Inc.</h3>
            <a href='portfolio/vimeo' className={styles.secondary_btn}>See More</a>
          </div>
          <div className={styles.logo_right} />
          <img src='vimeo.png' alt='vimeo' />
        </div>
        <div className={styles.professional}>
          <div className={styles.logo_left} />
          <img src='dreamsloth.png' alt='dreamsloth' />
          <div className={styles.professional_title}>
            <h3>Dream Sloth Games</h3>
            <a href='portfolio/dreamsloth' className={styles.secondary_btn}>See More</a>
          </div>
        </div>
        <div className={styles.professional}>
          <div className={styles.professional_title}>
            <h3>Freelance Design & Development</h3>
            <a href='portfolio/freelance' className={styles.secondary_btn}>See More</a>
          </div>
          <div className={styles.logo_right} />
          <h3 className={styles.freelance_title}>Freelance</h3>
        </div>
        
      </section>
      <section>
        <h2>Personal</h2>
        <a href='#personal' className={styles.arrow_icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <section id='personal'>
        <div className={styles.professional}>
          <div className={styles.logo_left} />
          <div className={styles.professional_title}>
            <h3>Korean Translator</h3>
            <a href='https://github.com/rweir4/korean_translator'alt='github-repo'target="_blank" className={styles.secondary_btn}>
              Github Repo
            </a>
          </div>
          <img src='/korean_food.jpg' />
        </div>
        <div className={styles.professional}>       
          <img src='/keyboard.jpg' />
          <div className={styles.professional_title}>
            <h3>Developer Portfolio</h3>
            <a href='https://github.com/rweir4/personaldevsite'alt='github-repo'target="_blank" className={styles.secondary_btn}>
              Github Repo
            </a>
          </div>
          <div className={styles.logo_right} />
        </div>      
        <div className={styles.professional}>
          <div className={styles.logo_left} />
          <div className={styles.professional_title}>
            <h3>Ginny & Co Brand Shop</h3>
            <a href='https://github.com/rweir4/doganddog' alt='github-repo' target="_blank" className={styles.secondary_btn}>
              Github Repo
            </a>
            <a href='https://ginnyandco.herokuapp.com/' className={styles.secondary_btn}>View Ginny and Co</a>
          </div>
          <img src='/ginnyandco.jpg' />
        </div>
      </section>
    </main>
  )
}
