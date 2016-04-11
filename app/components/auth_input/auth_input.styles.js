import {StyleSheet} from 'react-native'
import {red} from '../base/color'

const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 36,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: '#dfdfdf',
    margin: 5,
    color: '#5a5b5f',
    backgroundColor: '#fff'
  },

  error: {
    borderColor: red,
    color: red
  }
})

export default styles
