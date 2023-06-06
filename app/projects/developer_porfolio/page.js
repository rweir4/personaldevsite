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
      particularly for static sites, for which there is no need to manage a database.
      <br /><br />
      NextJS is built for customizability, but only as much as you want. This app is mostly a few basic routes,
      determined by the file structure.
      <br /><br />
      I have found it to be a general rule of thumb that where ReactJS is explicit, NextJS is often implicit.
      <br /><br />
      Furthermore, Server Side Rendering is very similar to Client Side Rendering, that is, until you need a responsive UI.
      With the current feature list for the portfolio site, it is not necessary to use any client components, but that will
      change with the introduction of other features. As is, any changes to the UI are handled using CSS.
      <br /><br /><br />
      <h2>Next Steps</h2>
      <br /><br />
      I will continue to iterate on this site, adding the following, in order:
      <br /><br />
      <strong>Blog Page:</strong> will track my personal projects, which will also be showcased on the Projects page
      <br /><br />
      <strong>Contact Page:</strong> will use a SendGrid API integration to implement a contact form
      <br /><br />
      <strong>Search:</strong> responsive searching
      <br /><br /><br />
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
