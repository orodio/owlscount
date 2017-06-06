import { createStore } from 'redux'
import reducer         from './__handlers__/reducer'
import initState       from './__handlers__/state'

const store = createStore(reducer, initState)

if (process.env.NODE_ENV === "development") window.$$$ = store

export const dispatch  = store.dispatch.bind(store)
export const getState  = store.getState.bind(store)
export const subscribe = store.subscribe.bind(store)

export default store
