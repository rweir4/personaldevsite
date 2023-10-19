import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from 'app/page.module.scss'

export default function SoftwareProjects() {
  return (
    <main className={styles.main}>
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
    </main>
  )
}