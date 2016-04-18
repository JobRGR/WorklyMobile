export const OPEN_MENU = 'OPEN_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'

export let updateMenu = isOpen => ({type: isOpen ? OPEN_MENU : CLOSE_MENU})
