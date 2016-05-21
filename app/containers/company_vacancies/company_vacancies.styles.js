import {StyleSheet, Dimensions} from 'react-native'
import {red} from '../../components/base/color'

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
    marginTop: 10
  },

  vacancy: {
    width: window.width * 0.8
  }
})

export default styles
