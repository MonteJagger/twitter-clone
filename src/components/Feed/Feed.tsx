import { PostTweet } from "../PostTweet/PostTweet"
import { Tweet } from "@components/Tweet/Tweet"
import styles from "./Feed.module.scss"

export const Feed: React.FC = () => {
    return (
        <div className={styles['feed-wrapper']}>
            <PostTweet></PostTweet>
            <Tweet></Tweet>
            <Tweet></Tweet>
            <Tweet></Tweet>
            <Tweet></Tweet>
        </div>
    )
}