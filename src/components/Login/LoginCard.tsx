import { useState } from "react";
import styles from './LoginCard.module.scss'

export const LoginCard: React.FC = () => {
    const [email, setEmail] = useState<string | null>(null)
    
    return (
        <div className={styles['login-wrapper']}>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
        </div>
    )
}