import styles from 'app/page.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>About</h1>
      <div className={styles.about}>
        <Image src='/ginny-and-me.png' alt='Rebecca Weir' width='300' height='300'
          className={styles.about_pic} loading='eager'/>
        <p>
          I am a fullstack developer with almost five years of experience,
          primarily working in a stack of Ruby on Rails and Javascript,
          after working for three years as a computational biologist.<br />
          <br />
          My previous work as a developer includes implementing and updating
           payments systems, authorization, and subscriptions, to name a few,
          and I am always open to working in new areas.<br />
          <br />
          I take pride in working on both small and large scales,
           with both design and product goals in mind,
          almost as much pride as I take in my puppy.<br />
          <br />
          For fun, I write books, play video games, and take my mini dachshund,
           Ginny, to the park.
        </p>
      </div>
    </main>
  )
}
