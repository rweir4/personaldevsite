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
       The MVP: Online Calendar Appointments
       <br /><br />
     </p>
   </main>
 )
}
