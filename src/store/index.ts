import { combineReducers, createStore } from "redux"

import { authReducer } from "./auth"

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch
