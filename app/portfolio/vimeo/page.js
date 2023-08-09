import styles from 'app/page.module.scss';

export default function Vimeo() {
  return (
    <main className={styles.main}>
      <img src='/vimeo.png' alt='vimeo logo' className={styles.logo} />
      <h1 className={styles.page_titles}>Vimeo, Inc.</h1>
      <p className={styles.project_about}>
        <h2>Notable portfolio</h2>
        <div className={styles.professional_portfolio}>
          <h3>Subscriptions Redesign</h3>
          <p>Worked on a redesign and implementation of the subscription system 
            to allow for improved consistency thereby reducing payments issues.
          </p>
          <h3>Multi-Tier Subscriptions</h3>
          <p>Assisted with the introduction and implementation of a multi-tier subscriber system,
            which allowed access to sets of features, determined by user tier. This required
            access control at various levels, as well as both a business logic and frontend redesign.
          </p>
          <h3>Reactified User Account Settings Page</h3>
          <p>By working closely with designers, I worked to modernize the technical and visual design of the user account settings page, using
            the most modern React technologies.
          </p>
          <h3>Documentation System</h3>
          <p>Introduced and wrote documentation (and its format) for the main systems related to payments and subscriptions,
            which acts as a both a technical and human readable guide for not only the developers, but
            any test engineers, design, or product that needs to understand the system on a more technical level.
          </p>
          <h3>Payments</h3>
          <p>Worked on a variety of payments features and issues to improve the workflow, which included
            optimizing various app as well as stripe integrations.
          </p>
          <h3>Study Abroad</h3>
          <p>Spend two months on an adjacent team, working on various video playback features.</p>
        </div>
      </p>
    </main>
  )
 }
 