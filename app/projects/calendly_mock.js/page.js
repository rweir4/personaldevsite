import styles from 'app/page.module.scss';
import Image from 'next/image';

export default function CalendlyMock() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Calendly Mock</h1>
      <p className={styles.project_about}>
        This is my next project. My plan is to design a larger system, and to implement the MVP, namely, making meeting appointments.
        The goal is to understand the larger impact, while breaking down a manageable section that I can implement with a third party API.
      </p>

      {/* <a href='https://github.com/rweir4/calendlymock' 
            alt='github-repo'
            target="_blank">
            Github Repo
      </a> */}
    </main>
  )
}