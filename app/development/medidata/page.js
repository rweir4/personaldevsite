import styles from 'app/page.module.scss';

export default function Medidata() {
  return (
    <main className={styles.main}>
      <img src='/medidata.png' alt='medidata logo' className={styles.logo} />
      <h1 className={styles.page_titles}>Medidata Solutions, A Dassault Systemes Company</h1>
      <p className={styles.project_about}>
        <div className={styles.professional_portfolio}>
          <p>Team and technical lead for clinical trial authorization team.</p>
          <p>Coordinated and implemented introduction of Clinical Trial Organization that remodeled responsive navigation bar and dictated new means of calculating authorization at each dropdown level.</p>
          <p>Created filter dropdowns and search for front-end service that rendered across applications and read from dedicated roles service to produce paginated results based on study categories and user roles.</p>
          <p>Migrated authorization application from EC2 to ECS and designed autoscaling guidelines using AWS Cloudwatch metrics.</p>
          <p>Integrated with NewRelic to capture metrics at particular points along manage roles user interaction workflow. Mentored two engineers on career and technical subjects.</p>
        </div>
      </p>
    </main>
  )
 }
 