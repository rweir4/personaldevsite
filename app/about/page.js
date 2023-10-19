import styles from 'app/page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default function About() {
  const skillsList = {
    'Languages' : [
      'SQL',
      'Ruby',
      'Javascript',
      'HTML/CSS',
    ],
    'Frameworks': [
      'Rails',
      'JQuery',
      'NextJS',
      'ReactJS',
      'Redux',
    ],
    'Systems' : [ 
      'Systems Design',
      'AWS: S3, ECS & EC2',
      'CI and Version Control',
      'SumoLogic',
      'New Relic',
    ],
    'Testing' : [
      'TDD & BDD',
      'Rspec',
      'Cucumber',
      'Selenium',
      'Jest',
    ],
    'Management' : [
      'Agile Framework',
      'Technical Project Management',
      'Performance Evaluation and Optimization',
      'Technical Writing & Project Documentation',
    ]
  }


  return (
    <main className={styles.main}>
      <h1 className={styles.about_title}>Behind the Coder, Behind the Writer</h1>
      <div id='about' className={styles.about}>
        <img src='/ginny-and-me.png' alt='Rebecca Weir' width='300' height='300'
          className={styles.about_pic} />
        <p>
          <h2>The Coder</h2>
          I am a Full Stack developer with five years of experience,
          primarily working in a stack of Ruby on Rails and Javascript,
          after working as a computational biologist.<br />
          <br />
          My previous work as a developer includes implementing and updating
          payments systems, authorization, and subscriptions, to name a few,
          and I am always open to working in new areas.<br />
          <br />
          I take pride in working on both small and large scales,
          with design, product, and people in mind,
          almost as much pride as I take in my puppy.<br />
          <br />

          <h2>The Writer</h2>
          I started writing in France, on a hot summer's day at a window that
          was a mere thread of relief. It was a heat wave, and the only way to escape it
          was to make a world of my own.<br />
          <br />
          For YA, I write sci-fi and fantasy books.
          For Adult Fiction, I write sci-fi and general fiction short stories.<br />
          <br />

          <h2>The Person</h2>
          I constantly alternate between video games, books, crafts, violin, and taekwondo.
          But the most important thing to me is my mini dachshund, Ginny, who is there for it all.
        </p>
      </div>
        <a href='/rebecca_weir_resume.pdf' alt='resume' target='_blank' rel="noopener noreferrer"
          className={styles.primary_btn}>Download Resume</a>
      {/* <h2 className={styles.about_title}>Skills and Resume</h2> */}
      {/* <div className={styles.skills}>
        {Object.keys(skillsList).map(skill => {
          return (
            <div className={styles.skill_list} key={skill}>
              <h3>{skill}</h3>
              <div>
                {skillsList[skill].map(indie_skill => {
                  return (
                    <div className={styles.indie_skill} key={indie_skill}>
                      {indie_skill}
                    </div>
                  );
                })}
              </div>
            </div>
          )
        })}
      </div> */}
    </main>
  )
}
