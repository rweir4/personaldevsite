import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Rebecca Leigh Weir</h1>
      <p className={styles.description}>As a coder and a creative writer, I believe that storytelling is capable of making a difference, and software development is another way to tell a story, whether it be the code's, the company's, or the customer's.</p>
    </main>
  )
}
