import styles from 'app/page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default function About() {
  const skills = [
    'Ruby on Rails',
    'Javascript',
    'JQuery',
    'NextJS',
    'ReactJS',
    'Redux',
    'SQL',
    'HTML/CSS',
    'TDD & BDD',
    'Cucumber',
    'Selenium',
    'Jest',
    'CI and Version Control',
    'Systems Design',
    'Performance Evaluation and Optimization',
    'New Relic',
    'SumoLogic',
    'AWS: S3, ECS & EC2',
    'Agile Framework',
    'Technical Project Management',
    'Technical Writing & Project Documentation',
  ]

  return (
    <main className={styles.main}>
      <h2 className={styles.about_title}>Skills and Resume</h2>
      <div className={styles.skills}>
        {skills.map((skill) => {
          return (<p>{skill}</p>);
        })}
      </div>
      <a href='/rebecca_weir_resume.pdf' alt='resume' target='_blank' rel="noopener noreferrer"
        className={styles.resume}>Download Resume</a>
      <FontAwesomeIcon icon={faAngleDown} className={styles.arrow_icon}/>
      <br />
      <div className={styles.bio}>
        <h2 className={styles.about_title}>Personal Bio</h2>
        <div className={styles.about}>
          <img src='/ginny-and-me.png' alt='Rebecca Weir' width='300' height='300'
            className={styles.about_pic} />
          <p>
            I am a fullstack developer with almost five years of experience,
            primarily working in a stack of Ruby on Rails and Javascript,
            after working for three years as a computational biologist.<br />
            <br />
            My previous work as a developer includes implementing and updating
            payments systems, authorization, and subscriptions, to name a few,
            and I am always open to working in new areas.<br />
            <br />
            I take pride in working on both small and large scales,
            with both design and product goals in mind,
            almost as much pride as I take in my puppy.<br />
            <br />
            For fun, I write books, play video games, and take my mini dachshund,
            Ginny, to the park.
          </p>
        </div>
      </div>
    </main>
  )
}
