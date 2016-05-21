import {StyleSheet, Dimensions} from 'react-native'
import {red, green} from '../../components/base/color'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },

  remove: {
    color: red,
    fontSize: 24,
    position: 'absolute',
    left: window.width - 60,
    marginTop: 5
  },

  edit: {
    color: green,
    fontSize: 24,
    position: 'absolute',
    left: window.width - 90,
    marginTop: 5
  },

  vacancy: {
    width: window.width * 0.70
  }
})

export default styles
