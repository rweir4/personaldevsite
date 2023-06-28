import styles from 'app/page.module.scss';
import Image from 'next/image';


export default function GinnyandcoMock() {
 return (
   <main className={styles.main}>  
    <h1 className={styles.page_titles}>Ginny and Co.</h1>
    <img className={styles.ginny} src='/ginnyandco.png' />
    <a className={styles.project_link} href='https://ginnyandco.herokuapp.com/' >View Ginny and Co</a>
    <p className={styles.project_about}>
      This website is being built to replace an existing squarespace site that runs Ginny and Co., a dog brand that I run.
      <br /><br />
      It is built using Ruby on Rails and React-Redux, and Postgresql.
    </p>
    <a href='https://github.com/rweir4/doganddog'
        alt='github-repo'
        target="_blank"
        className={styles.github_link}>
        Github Repo
    </a>
   </main>
 )
}
