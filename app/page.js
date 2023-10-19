import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro} />
      <div>
        <img
          src='rose-paint.png'
          className={styles.rose_background} />
        <h1 className={styles.title}>Rebecca Leigh Weir</h1>
        <h2 className={styles.subtitle}>Full Stack Software Engineer, Web Designer, and YA Author</h2>
        <p className={styles.description}>As a coder and a creative writer, I believe that storytelling is capable of making a difference, and software development is another way to tell a story, whether it be the code&apos;s, the company&apos;s, or the customer&apos;s.</p>
      </div>
      <img 
        src='/rebecca-outline.png' 
        alt='Picture of Developer' 
        className={styles.picture} />
    </main>
  )
}
