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
    <form onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input id="username" {...register("username")} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Username</label>
        <input id="password" {...register("password")} />
      </div>
      <button type="submit">Sign in</button>
    </form>
  )
}

export default LoginForm
