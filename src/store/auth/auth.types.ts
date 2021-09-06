import { User } from "../../global/shared"

export interface AuthReducerType {
  hasAuth: boolean
  user: null | User
}

enum AuthReducerActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export default AuthReducerActionTypes
