import styles from 'app/page.module.scss';

export default function Books() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.book_heading}>
          <h1>Books</h1>
          <img src='/electronic_lines.png' />
        </div>
        <div className={styles.series}>
          <img src='episode_1.jpeg' className={styles.book_cover}/>
          <p>
            <h2>A BLIP IN THE FACADE</h2>
            <br />
            <h3>A YA Sci-fi Episodic Release</h3>
            <br />
            Leo enjoys nothing more than riding his board on the redox that surrounds London’s city center, and he thinks that’s all he’ll ever see of it, until he meets the girl who is from the upper ranks.
            <br /><br />
            Nova never belonged in the East End, but it was her parents life that brought them there. And it’s Leo that will get her out.
          </p>
        </div>
      </div>
      <h3 className={styles.coming_soon}>Coming Soon to Amazon and Spotify</h3>
      <div className={styles.episode_links}>
        <button>eBook</button>
        <button>Audiobook</button>
      </div>
    </main>
  )
}