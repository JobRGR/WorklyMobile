import {StyleSheet} from 'react-native'
import {green as color} from '../../components/base/color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
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
