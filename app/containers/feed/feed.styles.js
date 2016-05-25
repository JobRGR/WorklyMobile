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
  },
  
  leftIcon: {
    color: '#5a5b5f',
    fontSize: 14,
    position: 'absolute',
    left: window.width - 90,
    marginTop: 10
  },


  shortItem: {
    width: window.width * 0.7
  }
})

export default styles
