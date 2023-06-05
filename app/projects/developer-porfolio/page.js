import styles from 'app/page.module.scss';
import Image from 'next/image';

export default function DeveloperPortfolio() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Developer Portfolio</h1>
      <p className={styles.project_about}>
        I build this website as a developer portfolio using NextJS.
        <br /><br />
        I had not used NextJS before, but this website is fairly bare bones and does not require
        a database. It is simply a static site, so my usual stack of Ruby on Rails paired with Javascript
        felt like overkill, because I really do not need to customize any of the backend setup.
        <br /><br />
        NextJS is built for customizability, but only as much as you want.
        <br /><br />
        Given that much of my past experience is with Javascript, and particularly React,
        it felt like an easy step over into the NextJS world. I have already begun to understand
        and appreciate the built in routing features of NextJS, but I am sure I have just touched
        the surface.
        <br /><br />
        There are many similarities to ReactJS, especially more recently, when functional components paired with hooks have
        become the popularized method of implementing state.
        The layout page is also very similar to the app component in a ReactJS app,
        except that the header, children, and footer, are  bnott wrapped in layers of explicitly defined routing,
        which I find to be an interesting change. 
        <br /><br />
        <Image src='/layout.png' alt='layout' width='650' height='450' />
        <br /><br />
        Its easier to read, but I wonder if it allows for as much customization.
        <br /><br /><br /><br />
        <h2>Next Steps:</h2>
        <br /><br />
        Blog Page: will track my personal projects, which will also be showcased on the Projects page
        <br /><br />
        Contact Page: will use a SendGrid API integration to implement a contact form
      </p>
    </main>
  )
}