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
    backgroundColor: '#fff',
    fontSize: 16
  },

  error: {
    borderColor: red,
    color: red
  },

  errorText: {
    marginLeft: 5,
    fontSize: 12,
    color: red
  }
})

export default styles
