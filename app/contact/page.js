import styles from 'app/page.module.scss';

export default function WorkWithMe() {
  return (
    <main className={styles.main}>
      <img src='/lets-talk.png' className={styles.banner} />
      <h2>I'd love to hear from you!</h2>
      <h3 className={styles.email}>
        If you are interested in working with me in any capacity, 
        please email me at rebeccaweir12@gmail.com.
      </h3>
    </main>
  )
}
