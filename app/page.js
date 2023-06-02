import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Rebecca Leigh Weir</h1>
        <h2 className={styles.subtitle}>FullStack Developer</h2>
        <p className={styles.description}>As a coder and a creative writer, I believe that storytelling is capable of making a difference, and software development is another way to tell a story, whether it be the code's, the company's, or the customer's.</p>
      </div>
      <img 
        src='/rebecca-outline.png' 
        alt='Picture of Developer' 
        className={styles.picture} />
    </main>
  )
}
