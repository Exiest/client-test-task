/* eslint-disable sort-keys */
import ActionType from "./auth.actions"
import Types, { AuthReducerType } from "./auth.types"

const initialState: AuthReducerType = {
  hasAuth: false,
  user: null,
  token: null,
}

const authReducer = (state = initialState, action: ActionType): AuthReducerType => {
  switch (action.type) {
    case Types.LOGIN: {
      const { token, user } = action.payload
      return {
        hasAuth: true,
        user,
        token,
      }
    }
    case Types.LOGOUT: {
      return {
        hasAuth: false,
        user: null,
        token: null,
      }
    }
    default:
      return state
  }
}

export default authReducer
