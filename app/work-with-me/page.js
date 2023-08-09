import styles from 'app/page.module.scss';

export default function WorkWithMe() {
  return (
    <main className={styles.main}>
      <h1 className={styles.work_with_me_subtitle}>
        My priorites are those of the product and business owners I work to promote.
      </h1>
      <div className={styles.work_with_me_desc}>
        <div className={styles.box_left}>
          <h2 className={styles.work_with_me_type}>As a Software Engineer</h2>
        </div>
        <div className={styles.box_right}>
          <p>
            I enjoy working on projects that require working across codebases and teams, and thinking in multiple dimensions. 
            They are not only fun to work on, but result in greater consistency and reliability across the system, 
            and more options for the customer.
          </p>
        </div>
      </div>
      <div className={styles.work_with_me_desc}>
        <div className={styles.box_right}>
          <h2 className={styles.work_with_me_type}>As a Web Designer and Developer</h2>
        </div>
        <div className={styles.box_left}>
          <p>
            I work with small business to grow and promote their brands by updating or redesigning and creating their site. 
            If you would like to see the kind of work I do, please check out my Freelance Portfolio. 
          </p>
        </div>
      </div>

      <h3 className={styles.email}>
        If you are interested in working with me in either capacity, 
        please email me at rebeccaweir12@gmail.com
      </h3>
    </main>
  )
}
