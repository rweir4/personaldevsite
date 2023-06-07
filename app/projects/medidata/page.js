import styles from 'app/page.module.scss';

export default function Medidata() {
  return (
    <main className={styles.main}>
      <img src='/medidata.webp' alt='medidata logo' className={styles.logo} />
      <h1 className={styles.page_titles}>Medidata Solutions, A Dassault Systemes Company</h1>
      <p className={styles.project_about}>
        <h2>Notable Projects</h2>
        <div className={styles.professional_projects}>
          <h3>Clinical Trial Organization:</h3>
          <p>Worked closely with design and product to plan and implement a database level to UI 
            reorganization of all clinical trials that allows for various sortings of the trials.
          </p>
          <h3>Filter and Search of Participants:</h3>
          <p>Created sets of filters and a responsive search, that parses various attributes of
            clinical trial and participant information, and paginates the results accordingly.
          </p>
          <h3>Environment Creation for Large Project (Encore Award):</h3>
          <p>Earned the Encore Award for creating an environment within
            a short period of time that was critical to the forward progress of a large project.
          </p>
          <h3>ECS Migration and Autoscaling:</h3>
          <p>I worked to move an app from AWS EC2 to ECS, and monitored and adjusted
            the autoscaling policy necessary to handle peak and low use hours, using NewRelic, SumoLogic,
            and AWS metrics.
          </p>
          <h3>Leadership and Mentorship:</h3>
          <p>Acted as the technical lead to get the Clinical Trial Organization Epic out the door. 
            Mentored newer engineers to the team on a weekly basis, acting as a people manager.
          </p>
        </div>
      </p>
    </main>
  )
 }
 