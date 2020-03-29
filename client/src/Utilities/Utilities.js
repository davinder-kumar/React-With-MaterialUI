import { store } from '../index'
export const updateObject = (oldData, newData) => {
  return {
    ...oldData,
    ...newData
  }
}
export const isLoggedIn = () => {
  const state = store.getState()
  return state.auth.token !== null ? true : false
}