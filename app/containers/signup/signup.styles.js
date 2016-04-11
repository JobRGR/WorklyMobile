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

  typeWrapper: {
    flexWrap: 'wrap',
    flexDirection:'row'
  },

  type: {
    margin: 10,
    color: '#5a5b5f',
    fontSize: 16
  },

  typeActive: {
    color
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
