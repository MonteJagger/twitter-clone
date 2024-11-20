import { getDatabase, push, ref, set, serverTimestamp } from "firebase/database"
import app from "@services/firebase"

// TODO: edit this file
export async function postTweet(content: string, media?: string) {
    const db = getDatabase(app)
    const newTweetRef = push(ref(db, 'tweets'))
    await set(newTweetRef, {
        id: newTweetRef.key,
        media: media ?? null,
        content: content,
        date: serverTimestamp(),
    })
}