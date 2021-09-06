import { User } from "../../global/shared"
import Types from "./auth.types"

interface LoginActionType {
  type: Types.LOGIN
  user: User
}

export const login = (user: User): LoginActionType => ({
  type: Types.LOGIN,
  user,
})

interface LogoutActionType {
  type: Types.LOGOUT
}

export const logout = (): LogoutActionType => ({
  type: Types.LOGOUT,
})

type AuthActionType = LoginActionType | LogoutActionType

export default AuthActionType
