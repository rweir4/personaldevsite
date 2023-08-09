import styles from 'app/page.module.scss';


export default function Freelance() {
 return (
   <main className={styles.main}>
    <h1 className={styles.page_titles}>Freelance</h1>
    <h3 className={styles.freelance_subtitle}>Customized Design, Squarespace Hosted</h3>
    <div className={styles.freelance_project}>
      <div>
        <h3 className={styles.freelance_project_title}>Journey Together Counseling Services</h3>
        <p className={styles.freelance_project_description}>
          I worked with JTCS to create a website for their new brand and for the expansion 
          of their business.
        </p>
        <button className={styles.secondary_btn}>
            <a href='https://journeytogethercounselingservices.com' target='_blank'>JTCS Site</a>
        </button>
      </div>
      <img src='/jtcs.png' className={styles.freelance_photo}/>
    </div>
    <h2 className={styles.freelance_project_title}>Ongoing Projects:</h2>
    <div>
      <div className={styles.freelance_project}>
        <div>
          <h3 className={styles.freelance_project_title}>I'M OKAY</h3>
          <p className={styles.freelance_project_description}>
            I'm working with therapist Mattie Sauer to promote her new podcast, 
            I'm Okay, as well as her approach to therapy.
          </p>
          <button className={styles.secondary_btn}>
            <a href='https://www.instagram.com/mattieimokay/' target='_blank'>Instagram</a>
          </button>
        </div>
        <img src='/imokay.png' className={styles.freelance_photo} />
      </div>
      <div className={styles.freelance_project}>
        <div>
          <h3 className={styles.freelance_project_title}>of Rosemary & Rue</h3>
          <p className={styles.freelance_project_description}>
            I'm working with the artist behind of Rosemary & Rue to create a portfolio, shop, and blog
            for her work.
          </p>
          <button className={styles.secondary_btn}>
            <a href='https://www.instagram.com/ofrosemaryandrue/' target='_blank'>Instagram</a>
          </button>
        </div>
        <img src='/ofRosemaryandRue.png' className={styles.freelance_photo} />
      </div>
    </div>
   </main>
 )
}
