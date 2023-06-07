import styles from 'app/page.module.scss';
import Image from 'next/image';


export default function CalendlyMock() {
 return (
   <main className={styles.main}>
     <h1 className={styles.page_titles}>Calendly Mock</h1>
     <p className={styles.project_about}>
        The goal: take a dive into understanding another real world, complex system design,
        while breaking down a manageable section that I can implement with a third party API.
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
      MVP: Online Calendar Appointments
      {/* feature list */}
      {/* To run locally */}
      <br /><br />
      <h2>Next Steps</h2>
  
      <br /><br /><br />
    </p>
   </main>
 )
}
