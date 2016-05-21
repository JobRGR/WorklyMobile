import {StyleSheet, Dimensions} from 'react-native'
import {green as borderColor, red as color} from '../../components/base/color'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },

  input: {
    width: window.width - 40,
    marginLeft: -5,
    borderColor
  },

  remove: {
    color,
    fontSize: 18,
    padding: 2,
    position: 'absolute',
    left: window.width - 75,
    marginTop: -37
  }
})

export default styles
