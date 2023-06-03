import styles from 'app/page.module.scss';

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.contact}>
        <div>
          <h1 className={styles.page_titles}>Let's Chat</h1>
          <p>If you're interested in working with me, feel free to send me a message. I'd love to talk with you!</p>
        </div>
        <form action="/send-data-here" method="post" className={styles.email}>
          <label for="first">First name:</label>
          <input type="text" id="first" name="first" />

          <label for="last">Last name:</label>
          <input type="text" id="last" name="last" />

          <label for="last">Email:</label>
          <input type="text" id="email" name="email" />

          <label for="last">Message:</label>
          <textarea type="text" id="message" name="message" />
          
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  )
}
