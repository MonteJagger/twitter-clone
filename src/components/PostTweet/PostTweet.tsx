import { useState } from 'react';
import styles from './PostTweet.module.scss'
import { ref, push, getDatabase, set, serverTimestamp } from 'firebase/database';
import app from '../../services/firebase';

export const PostTweet: React.FC = () => {
    const [tweet, setTweet] = useState<string>('');

    async function handlePostTweet() {
        const db = getDatabase(app)
        const newTweetRef = push(ref(db, 'tweets'))
        set(newTweetRef, {
            id: newTweetRef.key,
            media: '',
            content: tweet,
            date: serverTimestamp(),
        })
        console.log('Tweet posted?: ', tweet)
        setTweet('')
    }

    return (
        <div className={styles['post-tweet-wrapper']}>
            <textarea placeholder="What's happening?" onChange={(e)=>setTweet(e.target.value)}></textarea>
            <button onClick={handlePostTweet}>Tweet</button>
        </div>
    )
}