export const SET_SIGNUP_EMAIL = 'SET_SIGNUP_EMAIL'
export const SET_SIGNUP_PASSWORD = 'SET_SIGNUP_PASSWORD'
export const SET_SIGNUP_CONFIRM = 'SET_SIGNUP_CONFIRM'
export const SET_SIGNUP_NAME = 'SET_SIGNUP_NAME'

export let setEmail = data => ({type: SET_SIGNUP_EMAIL, data})
export let setPassword = data => ({type: SET_SIGNUP_PASSWORD, data})
export let setConfirm = data => ({type: SET_SIGNUP_CONFIRM, data})
export let setName = data => ({type: SET_SIGNUP_NAME, data})
