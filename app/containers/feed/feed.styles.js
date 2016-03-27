import {StyleSheet} from 'react-native'
import {color} from '../../components/nav_bar/nav_bar.styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: '#5a5b5f'
  },

  sub: {
    textAlign: 'center',
    color: '#5a5b5f',
    width: 260,
    fontSize: 16,
    marginBottom: 20
  },

  link: {
    textAlign: 'center',
    color,
    fontSize: 16,
    marginBottom: 3,
    padding: 3
  }
})

export default styles
