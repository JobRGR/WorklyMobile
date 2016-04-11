import {StyleSheet} from 'react-native'
import {color} from '../../components/nav_bar/nav_bar.styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },

  more: {
    textAlign: 'center',
    color,
    fontSize: 16,
    marginBottom: 15,
    padding: 3
  },

  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  error: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#5a5b5f'
  }
})

export default styles
