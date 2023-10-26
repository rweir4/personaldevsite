import styles from 'app/page.module.scss'

export default function SoftwareProjects() {
  return (
    <main className={styles.main}>
      <div className={styles.software_projects}>
        <div className={styles.projects}>
          <div className={styles.projects_info}>
            <h2>Korean Translator</h2>
            <a href='https://github.com/rweir4/korean_translator'alt='github-repo'target="_blank" className={styles.secondary_btn}>
              Github Repo
            </a>
          </div>
          <img src='/korean_food.jpg' className={styles.projects_pic}/>
        </div>
        <div className={styles.projects}>       
          <img src='/keyboard.jpg' className={styles.projects_pic}/>
          <div className={styles.projects_info}>
            <h2>Developer Portfolio</h2>
            <a href='https://github.com/rweir4/personaldevsite'alt='github-repo'target="_blank" className={styles.secondary_btn}>
              Github Repo
            </a>
          </div>
        </div>      
        <div className={styles.projects}>
          <div className={styles.projects_info}>
            <h2>Ginny & Co Brand Shop</h2>
            <a href='https://github.com/rweir4/doganddog' alt='github-repo' target="_blank" className={styles.secondary_btn}>
              Github Repo
            </a>
            <a href='https://ginnyandco.herokuapp.com/' className={styles.secondary_btn}>View Ginny and Co</a>
          </div>
          <img src='/ginnyandco.jpg' className={styles.projects_pic}/>
        </div>
      </div>
    </main>
  )
}