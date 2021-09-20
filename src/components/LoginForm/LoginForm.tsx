import { ApolloError } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import cn from "classnames"
import { useForm, useFormState } from "react-hook-form"

import styles from "./styles/styles.module.css"
import { validationSchema } from "./utils/validation"

export interface UserData {
  username: string
  password: string
}

interface LoginFormProps {
  onLogin: (data: UserData) => void
  loading: boolean
  error?: ApolloError
}

const defaultValues = {
  password: "",
  username: "",
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, loading, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserData>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const { isValid, dirtyFields } = useFormState({ control })

  const onSubmit = handleSubmit((data) => onLogin(data))

  const allModified = Object.entries(dirtyFields).length === Object.entries(defaultValues).length
  const isReady = allModified && isValid && !loading

  return (
    <form onSubmit={onSubmit} className={styles.wrap}>
      <div className={styles.formBody}>
        <h2 className={styles.title}>Welcome back!</h2>
        <p className={styles.caption}>Log in using your username or phone number</p>
        {!loading ? (
          <>
            <div className={styles.formGroup}>
              <input
                className={styles.formInput}
                id="username"
                {...register("username")}
                placeholder="Username"
              />
            </div>
            {errors?.username && <small>{errors.username.message}</small>}
            <div className={styles.formGroup}>
              <input
                className={styles.formInput}
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
              />
            </div>
            {errors?.password && <small>{errors.password.message}</small>}
            <div className={styles.optionalWrap}>
              <button type="button" className={styles.optional}>
                Forgot password
              </button>
            </div>
            {error && <p>{error}</p>}
          </>
        ) : (
          <div className={styles.loading}></div>
        )}
      </div>
      <div className={styles.submitBtnWrap}>
        <button
          disabled={isReady}
          className={cn(styles.submitBtn, isReady && styles.submitBtnReady)}
        >
          Log in
        </button>
      </div>
    </form>
  )
}

export default LoginForm
