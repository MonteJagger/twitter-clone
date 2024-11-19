import { useState } from 'react'
import styles from './PostTweet.module.scss'
import { postTweet } from 'src/api/tweetApi'

export const PostTweet: React.FC = () => {
    const [tweet, setTweet] = useState<string>('');

    async function handlePostTweet() {
        postTweet(tweet)
        setTweet('') // clear tweet
    }

    return (
        <div className={styles['post-tweet-wrapper']}>
            <textarea placeholder="What's happening?" onChange={(e)=>setTweet(e.target.value)}></textarea>
            <button onClick={handlePostTweet}>Tweet</button>
        </div>
    )
}
