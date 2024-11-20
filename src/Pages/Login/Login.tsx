import { LoginCard } from 'components/Login/LoginCard'
import styles from './Login.module.scss'

export const Login: React.FC = () => {
    return (
        <div className={styles['login-container']}>
            <h1>Login</h1>
            <LoginCard></LoginCard>
        </div>
    )
}