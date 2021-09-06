import LoginForm from "../../components/LoginForm"
import styles from "./styles/styles.module.css"

interface LoginProps {
  onLogin: () => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className={styles.wrap}>
      <LoginForm />
    </div>
  )
}

export default Login
