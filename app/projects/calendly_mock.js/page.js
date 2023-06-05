import styles from 'app/page.module.scss';
import Image from 'next/image';

export default function CalendlyMock() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Calendly Mock</h1>
      <p className={styles.project_about}>Hi
      </p>

      {/* <a href='https://github.com/rweir4/calendlymock' 
            alt='github-repo'
            target="_blank">
            Github Repo
      </a> */}
    </main>
  )
}