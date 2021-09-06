import { Link } from "react-router-dom"

import { TextButton } from "../../components/Buttons"
import * as styles from "./styles/styles.module.css"

const Start = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.buttonWrap}>
        <Link to="/login">
          <TextButton text="Log in" />
        </Link>
      </div>
    </div>
  )
}

export default Start
