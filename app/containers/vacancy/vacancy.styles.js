import {StyleSheet} from 'react-native'
import {green as color} from '../../components/base/color'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },

  sub: {
    color,
    fontSize: 14
  },

  title: {
    color: '#5a5b5f',
    fontSize: 16,
    marginTop: 10
  },

  text: {
    color: '#5a5b5f',
    fontSize: 14
  },

  about: {
    lineHeight: 21
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    marginBottom: 10
  },

  subRow: {
    marginTop: 5,
    marginBottom: 5
  },

  row: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  }
})

export default styles
