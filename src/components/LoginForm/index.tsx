import { useForm } from "react-hook-form"

import styles from "./styles/styles.module.css"

interface InitialValues {
  username: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<InitialValues>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit} className={styles.wrap}>
      <div className={styles.formBody}>
        <h2 className={styles.title}>Welcome back!</h2>
        <p className={styles.caption}>Log in using your username or phone number</p>
        <div className={styles.formGroup}>
          <input
            className={styles.formInput}
            id="username"
            {...register("username")}
            placeholder="Username"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.formInput}
            id="password"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
        </div>
        <div className={styles.optionalWrap}>
          <button type="button" className={styles.optional}>
            Forgot password
          </button>
        </div>
      </div>
      <div className={styles.submitBtnWrap}>
        <button className={styles.submitBtn}>Log in</button>
      </div>
    </form>
  )
}

export default LoginForm
