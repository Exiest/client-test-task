import { combineReducers, createStore } from "redux"

import { authActions, authReducer } from "./auth"

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch

export const StoreActions = { ...authActions }
