/* eslint-disable sort-keys */
import { User } from "../../global/shared"
import Types from "./auth.types"

type LoginPayload = {
  token: string
  user: User
}

interface LoginActionType {
  type: Types.LOGIN
  payload: LoginPayload
}

export const login = (payload: LoginPayload): LoginActionType => ({
  type: Types.LOGIN,
  payload,
})

interface LogoutActionType {
  type: Types.LOGOUT
}

export const logout = (): LogoutActionType => ({
  type: Types.LOGOUT,
})

type AuthActionType = LoginActionType | LogoutActionType

export default AuthActionType
