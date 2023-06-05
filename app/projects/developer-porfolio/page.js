import styles from 'app/page.module.scss';
import Image from 'next/image';

export default function DeveloperPortfolio() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Developer Portfolio</h1>
      <p className={styles.project_about}>
        I build this website as a developer portfolio using NextJS.
        <br /><br />
        Though NextJS is new to me, my usual stack of Ruby on Rails paired with Javascript
        felt like overkill, because there is no backend customization, or for a database.
        <br /><br />
        NextJS is built for customizability, of course, but only as much as you want.
        <br /><br />
        Given that much of my past experience is with Javascript, and particularly React,
        it was an easy step over into the NextJS world. I have already begun to understand
        and appreciate the built in routing features of NextJS. 
        <br /><br />
        For instance, the layout component is similar to the app component in a ReactJS app,
        except that the header, children, and footer, are not wrapped in layers of explicitly defined routing,
        though wrapping can be done.
        <br /><br />
        NextJS:
        <Image src='/layout-screenshot.png' alt='layout component' width='650' height='450' />
        <br /><br />
        ReactJS &#40;in a different app&#41;
        <Image src='/react-app-component.png' alt='app component' width='650' height='450' />
        <br /><br />
        I find this to be a good analogy for most of the NextJS frontend work. SSR is very similar to CSR,
        that is, until you need a responsive UI. In this case, any changes to the UI are handled 
        using CSS.
        <br /><br /><br />

        <h2>Next Steps</h2>
        <br /><br />
        I will continue to iterate on this site, adding the following, in order:
        <br /><br />
        <strong>Blog Page:</strong> will track my personal projects, which will also be showcased on the Projects page
        <br /><br />
        <strong>Contact Page:</strong> will use a SendGrid API integration to implement a contact form
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