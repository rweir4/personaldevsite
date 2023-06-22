import styles from 'app/page.module.scss';
import Image from 'next/image';


export default function DeveloperPortfolio() {
 return (
   <main className={styles.main}>
    <h1 className={styles.page_titles}>Developer Portfolio</h1>
    <p className={styles.project_about}>
      This website, which acts as my developer portfolio, is built using NextJS 13, and React 18, and Sass.
      <br /><br />
      This is my first NextJS project, and I chose to use it because of its quick development to production time,
      since things like webpack do not need to be configured in order to develop. There is also no need for a database,
      which makes the alternative I would consider, Ruby on Rails, to be overkill.
    </p>
    <a href='https://github.com/rweir4/personaldevsite'
          alt='github-repo'
          target="_blank"
          className={styles.github_link}>
          Github Repo
    </a>
   </main>
 )
}
