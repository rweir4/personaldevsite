import styles from 'app/page.module.scss';

export default function Dreamsloth() {
  return (
    <main className={styles.main}>
      <img src='/dreamsloth.png' alt='dreamsloth logo' className={styles.logo} />
      <h1 className={styles.page_titles}>Dream Sloth Games</h1>
      <p className={styles.project_about}>
        <div className={styles.professional_portfolio}>
          <p>I am a part of the Dream Sloth Games software development team, using primarily javascript based game development.</p>
          <p>I am working on reviving and enhancing Duelyst II, a strategy game beloved by a large community.</p>
        </div>
        <br />
        <br />
        <a href='portfolio/freelance' className={styles.secondary_btn}>Dream Sloth Site</a>
      </p>
    </main>
  )
 }
 