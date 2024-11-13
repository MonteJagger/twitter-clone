import styles from "./Tweet.module.scss"

export const Tweet: React.FC = () => {
  return (
    <div className={styles['tweet-container']}>
      <div className={styles['user-detail']}>
        <img
          style={{ height: '40px', width: '40px' }}
          src="https://www.gravatar.com/avatar/"
          alt="User Avatar"
        />
        <div className={styles['user-name']}>
          <h3>John Doe</h3>
          <p>@johndoe</p>
        </div>
      </div>
      <div className={styles.content}></div>
      <div className={styles.actions}>
        <button>Like</button>
        <button>Retweet</button>
        <button>Comment</button>
      </div>
    </div>
  )
}
