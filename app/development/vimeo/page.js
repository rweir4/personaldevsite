import styles from 'app/page.module.scss';

export default function Vimeo() {
  return (
    <main className={styles.main}>
      <img src='/vimeo.png' alt='vimeo logo' className={styles.logo} />
      <h1 className={styles.page_titles}>Vimeo, Inc.</h1>
      <p className={styles.project_about}>
        <div className={styles.professional_portfolio}>
        <p>Released large full-stack payment and subscriber features through continuous deployment.</p>       
        <p>Redesigned subscription system to track a subscription across events using a state machine.</p>     
        <p>Designed and added multi-tier capabilities to subscriptions and videos, which required documenting the subscription workflow and simplifying nested logic.</p>      
        <p>Redesigned subscription system to track a subscription across events using a state machine.</p>
        <p>Designed and added multi-tier capabilities to subscriptions and videos, which required documenting the subscription workflow and simplifying nested logic.</p>
        <p>Resolved inconsistencies in integrations with In App Purchases, such as with the Google Play Authenticator.</p>
        <p>Modernized user account settings page and migrated from Haml to React using hooks.</p>
        <p>Updated Stripe integration to process transactions for coupons and free products.</p>
        <p>Separated the video player experience workflow to account for user types, and therefore different access levels.</p>
        <p>Remodeled approach to project breakdowns, reducing our time-to-completion rate.</p>
        <p>Proposed and implemented documentation system for engineers, designers, and product owners alike.</p>
        </div>
      </p>
    </main>
  )
 }
 