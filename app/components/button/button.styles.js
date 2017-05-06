import {StyleSheet} from 'react-native'
import {green as color} from '../base/color'

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    color: '#fff',
    width: 280,
    padding: 8,
    height: 34,
    backgroundColor: color,
    borderRadius: 5,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5
  },

  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 34,
    backgroundColor: color,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    maxHeight: 34,
    position: 'relative'
  },

  spinner: {
    position: 'relative',
    height: 34,
    top: -12
  }

})

export default styles
