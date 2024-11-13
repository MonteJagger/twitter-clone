import styles from './PostTweet.module.scss'

export const PostTweet: React.FC = () => {
    return (
        <div className={styles['post-tweet-wrapper']}>
            <textarea placeholder="What's happening?"></textarea>
            <button>Tweet</button>
        </div>
    )
}