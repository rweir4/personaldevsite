import styles from 'app/page.module.scss';

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.contact}>
        <div className={styles.chat}>
          <h1 className={styles.page_titles}>Let&apos;s Chat</h1>
          <p>If you&apos;re interested in working with me, feel free to send me a message. I would love to talk with you!</p>
        </div>
        <form action="/send-data-here" method="post" className={styles.email}>
          <div className={styles.form_info}>
            <div>
              <label for="first">First Name:</label>
              <input type="text" id="first-name" name="first-name" placeholder='First Name'/>
            </div>
            <div>
              <label for="last">Last Name:</label>
              <input type="text" id="last-name" name="last-name" placeholder='Last Name'/>
            </div>
          </div>

          <label for="last">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder='Subject'/>

          <label for="last">Email:</label>
          <input type="text" id="email" name="email" placeholder='Email'/>

          <label for="last">Message:</label>
          <textarea type="text" id="message" name="message" placeholder='Message'/>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  )
}
