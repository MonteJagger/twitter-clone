import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { useEffect, useState } from "react"
import app from "./firebase"

export const useAuthState = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const auth = getAuth(app)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User: ', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        
        // Cleanup subscription on unmount
        return () => unsubscribe()
    }, [])

    return { user, loading }
}