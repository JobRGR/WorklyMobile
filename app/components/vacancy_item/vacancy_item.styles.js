import {StyleSheet} from 'react-native'
import {color} from '../nav_bar/nav_bar.styles'

const styles = StyleSheet.create({
  container: {
    borderBottomColor: color,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 15,
    marginBottom: 15
  },

  sub: {
    color,
    fontSize: 14
  },

  title: {
    color: '#5a5b5f',
    fontSize: 16
  },

  text: {
    color: '#5a5b5f',
    fontSize: 14
  },

  image: {
    width: 100,
    height: 100,
    position: 'absolute'
  }
})

export default styles
