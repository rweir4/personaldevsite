import styles from 'app/page.module.scss';

export default function WorkWithMe() {
  return (
    <main className={styles.main}>
      <img src='/lets-talk.png' className={styles.banner} />
      <h2>I&apos;d love to hear from you!</h2>
      <p className={styles.email}>
        If you are interested in working with me in any capacity, please email me at rebeccaweir12@gmail.com
      </p>
    </main>
  )
}
