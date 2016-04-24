export  default ({experiences}) => {
  if (!experiences || !Array.isArray(experiences) || !experiences.length) {
    return null
  }
  const {position} = experiences[experiences.length - 1]
  return !position || !position.name ? null : position.name
}