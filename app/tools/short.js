export default (text, length) => {
  if (text.length < length) {
    return text
  }
  let str = text.split('').splice(0, length).join('')
  const lastIndex = str.lastIndexOf(' ')
  const res = str.substring(0, lastIndex)
  return `${res}${res[res.length - 1] != '.' ? '...' : ''}`
}