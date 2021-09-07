import { Link } from "react-router-dom"

import { TextButton } from "../../components/Buttons"
import LoginForm from "../../components/LoginForm"
import styles from "./styles/styles.module.css"

const Login: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.btnWrap}>
        <Link to="/">
          <TextButton text="← Go back" />
        </Link>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
