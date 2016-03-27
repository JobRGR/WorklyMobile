export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL'
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD'

export let setEmail = data => ({type: SET_LOGIN_EMAIL, data})
export let setPassword = data => ({type: SET_LOGIN_PASSWORD, data})
