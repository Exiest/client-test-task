import { User } from "../../global/shared"

export interface AuthReducerType {
  hasAuth: boolean
  user: null | User
  token: null | string
}

enum AuthReducerActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export default AuthReducerActionTypes
