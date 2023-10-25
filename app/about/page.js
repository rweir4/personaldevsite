import styles from 'app/page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faSwatchbook, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.about_title}>Behind the Coder, Behind the Writer</h1>
      <div id='about' className={styles.about}>
        <img src='/ginny-and-me.png' alt='Rebecca Weir' className={styles.about_pic} />
        <div className={styles.vertical_rule}></div>
        <div className={styles.list_hats}>
          <div className={styles.hat}>
            <FontAwesomeIcon icon={faCodeBranch} style={{"--fa-primary-color": "#463259", "--fa-secondary-color": "#463259",}} />
            <h2>As a Software Engineer</h2>
          </div>
          <p>
            I enjoy working on projects that require working across codebases and teams, and thinking in multiple dimensions. 
            They are not only fun to work on, but result in greater consistency and reliability across the system, 
            and more options for the customer.
          </p>
          <div className={styles.hat}>
            <FontAwesomeIcon icon={faSwatchbook} style={{"--fa-primary-color": "#463269", "--fa-secondary-color": "#463269",}} />
            <h2>As a Web Designer & Developer</h2>
          </div>
          <p>
            I work with small business to grow and promote their brands by updating or redesigning and creating their site. 
            If you would like to see the kind of work I do, please check out my <a href='/development/web_design_and_development' className={styles.inline_link}>previous web designs</a>. 
          </p>
          <div className={styles.hat}>
            <FontAwesomeIcon icon={faPenNib} style={{"--fa-primary-color": "#463269", "--fa-secondary-color": "#463269",}} />
            <h2>As a Writer</h2>
          </div>
          <p>
            I have always had a love for YA sci-fi/fantasy stories, and am publishing an eBook series called <a href='/books' className={styles.inline_link}><em>A Blip in the Facade</em></a>.
            I have other projects going on behind the scenes, so stay tuned!. 
          </p>
        </div>
      </div>
      <a href='/rebecca_weir_resume.pdf' alt='resume' target='_blank' rel="noopener noreferrer"
        className={styles.primary_btn}>Download Resume</a>
    </main>
  )
}
