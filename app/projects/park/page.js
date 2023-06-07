import styles from 'app/page.module.scss';

export default function Park() {
  return (
    <main className={styles.main}>
      <h1 className={styles.page_titles}>Park Features</h1>
      <p className={styles.project_about}>
        The app for dog walkers who want to know what they&apos;re walking into.
        <br /><br />
        The app is in its initial design stages. I am creating a system design for a large scale version of the app,
        but will only be implementing the MVP.
        <br /><br />
        <h2>Project Design</h2>
        <br />
        Routes:
        <table>
          <tr><td>/home</td></tr>
        </table>
        {/* wireframes */}
        {/* MVP */}
        <br />
        MVP: List of nearby parks with map, and type of park
        {/* feature list */}
        {/* To run locally */}
        <br /><br />
        <h2>Next Steps</h2>
        1&#41; List all features in park
        <br />
        - paths, water, fields, playgrounds, sports courts
        <br />
        - length of walking paths, type of water and how much is along path, etc.
        <br />
        <br />
        2&#41; Questionnaire/Reviews
        <br />
        - how well kept is the park
        <br />
        - how people and dog friendly is it
        <br />
        - how crowded is the park
        <br /><br /><br />
      </p>
    </main>
  )
 }
 