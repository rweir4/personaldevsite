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
      <br /><br />
      <h2>Project Design</h2>
      <br />
      <h3>Routes</h3>
      <table>
        <tr><td>/home</td></tr>
        <tr><td>/projects</td></tr>
        <tr><td>/projects/vimeo</td></tr>
        <tr><td>/projects/medidata</td></tr>
        <tr><td>/projects/developer_portfolio</td></tr>
        <tr><td>/projects/calendly_mock</td></tr>
        <tr><td>/projects/parks</td></tr>
        <tr><td>/about</td></tr>
      </table>
      <br /><br />
      <h3>MVP</h3>
      <p>List professional and personal projects and their design, features,
        and any available code.
      </p>
      <br />
      <h3>To run locally</h3>
      <code>git clone git@github.com:rweir4/personaldevsite.git</code><br />
      <code>npm i</code><br />
      <code>npm run dev</code><br />
      <p>Open http://localhost:3000 with your browser to see the result.</p>
      <br />
      <h2>Next Steps</h2>
      Server Side Rendering is very similar to Client Side Rendering, until you need a responsive UI, in which case
      client components are needed. With the current feature list for the portfolio site, it is not necessary to use any client components, but that will change with the introduction of other features. As is, any changes to the UI are handled using CSS.
      <br /><br />
      I will continue to iterate on this site, adding the following, in order:
      <br /><br />
      <strong>Blog Page:</strong> will track my personal projects and studies, which will also be showcased on the Projects page
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
