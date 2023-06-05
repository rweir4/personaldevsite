import styles from 'app/page.module.scss'
import Image from 'next/image'

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Projects</h1>
      <div className={styles.projects}>
        <div>
          <a href='projects/developer-porfolio'>
            <Image src='/computer.png' alt='computer' width='200' height='200'/>
            <h3>Developer Portfolio</h3>
          </a>
          <a href='https://github.com/rweir4/personaldevsite' 
            alt='github-repo'
            target="_blank">
            Github Repo
          </a>
        </div>
        <div>
          <Image src='/calendlymock.png' alt='calendlymock' width='200' height='200'/>
          <h3>Calendly Mock</h3>
          <a href='https://github.com/rweir4/calendlymock' 
            alt='github-repo'
            target="_blank">
            Github Repo
          </a>
        </div>
        <div>
          <Image src='/dogwalk.png' alt='dogwalk' width='200' height='200'/>
          <h3>Dog Walk Tracker</h3>
          <a href='https://github.com/rweir4/dogwalktracker' 
            alt='github-repo'
            target="_blank">
            Github Repo
          </a>
        </div>
      </div>
    </main>
  )
}
