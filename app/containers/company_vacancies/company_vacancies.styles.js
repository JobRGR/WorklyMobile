import {StyleSheet, Dimensions} from 'react-native'
import {red, green} from '../../components/base/color'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20
  },

  vacancy: {
    borderBottomColor: green,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 15
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

  list: {
    color: '#5a5b5f',
    fontSize: 24,
    position: 'absolute',
    left: window.width - 120,
    marginTop: 10
  }
})

export default styles
