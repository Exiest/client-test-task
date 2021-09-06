import ActionType from "./auth.actions"
import Types, { AuthReducerType } from "./auth.types"

const initialState = {
  hasAuth: false,
  user: null,
}

const authReducer = (state = initialState, action: ActionType): AuthReducerType => {
  switch (action.type) {
    case Types.LOGIN: {
      return {
        hasAuth: true,
        user: action.user,
      }
    }
    case Types.LOGOUT: {
      return {
        hasAuth: false,
        user: null,
      }
    }
    default:
      return state
  }
}

export default authReducer
