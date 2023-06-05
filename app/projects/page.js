import styles from 'app/page.module.scss'
import Image from 'next/image'

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Projects</h1>
      <div className={styles.projects}>
        <div>
          <a href='projects/developer-porfolio'>
            <Image src='/keyboard.jpg' alt='computer' width='250' height='350' 
              className={styles.highlight}/>
            <h3 className={styles.project_title}>Developer Portfolio</h3>
          </a>
        </div>
        <div>
          <Image src='/calendly.jpg' alt='calendlymock' width='250' height='350'
            className={styles.highlight}/>
          <h3 className={styles.project_title}>Calendly Mock</h3>
        </div>
        <div>
          <Image src='/park.jpg' alt='dogwalk' width='250' height='350'
            className={styles.highlight}/>
          <h3 className={styles.project_title}>Park Features</h3>
        </div>
      </div>
    </main>
  )
}
