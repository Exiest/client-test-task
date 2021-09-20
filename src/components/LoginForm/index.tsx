import { useMutation } from "@apollo/client"
import { useCallback, useEffect } from "react"
import { Redirect } from "react-router-dom"

import { User } from "../../global/shared"
import { LOGIN_MUTATION } from "../../graphql/mutations/auth"
import { authActions, authSelectors } from "../../store/auth"
import { useTypedDispatch, useTypedSelector } from "../../store/hooks"
import LoginForm, { UserData } from "./LoginForm"

interface LoginSuccessData {
  token: string
  user: User
}

const LoginFormContainer: React.FC = () => {
  const [login, { data, ...rest }] = useMutation<LoginSuccessData>(LOGIN_MUTATION)
  const dispatch = useTypedDispatch()
  const hasAuth = useTypedSelector(authSelectors.getAuth)

  const makeLoginRequest = useCallback(
    (payload: UserData) => login({ variables: { ...payload } }),
    [login],
  )

  useEffect(() => {
    if (data) {
      dispatch(authActions.login(data))
    }
  }, [data])

  return !hasAuth ? <LoginForm onLogin={makeLoginRequest} {...rest} /> : <Redirect to="/profile" />
}

export default LoginFormContainer
