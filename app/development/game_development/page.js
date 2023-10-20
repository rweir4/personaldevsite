import styles from 'app/page.module.scss';

export default function Dreamsloth() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Game Development</h1>
      <div className={styles.game_banner}>
        <img src='/duelyst_dreamsloth.png' alt='dreamsloth logo' />
        <img src='/duelyst.png' alt='duelyst' />
      </div>
      <p className={styles.game_description}>I am part of the developer team at Dream Sloth Games, working on Duelyst II.</p>
      <p className={styles.game_description}>Duelyst II is a revamp and enhancement of a classic turn-based, strategy card game.</p>
      <a href='https://store.steampowered.com/app/2004320/Duelyst_II/' className={styles.steam_link}>
        Free to Play on Steam</a>
      <img src='/steam.png' alt='steam duelyst page' className={styles.steam_img} />
      <div className={styles.duelyst_links}>
        <a href='https://discord.com/invite/duelyst' alt='discord'>
          <img src='/discord.png' alt='steam duelyst page' className={styles.steam_img} />
        </a>
        <a href='https://www.youtube.com/c/Duelyst2' alt='youtube'>
          <img src='/youtube.png' alt='steam duelyst page' className={styles.steam_img} />
        </a>
      </div>
    </main>
  )
 }
 