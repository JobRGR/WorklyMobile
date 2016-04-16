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
    fontSize: 21,
    marginTop: 20
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

  row: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  },

  info: {
    marginTop: 10,
    marginBottom: 10
  },

  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  error: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#5a5b5f'
  },

  vacanciesWrapperTitle: {
    color: '#5a5b5f',
    fontSize: 18,
    marginBottom: 5
  },

  vacancyWrapper: {
    marginTop: 5,
    marginBottom: 5
  },

  vacanciesWrapper: {
    marginTop: 20,
    marginBottom: 20
  },

  center: {
    textAlign: 'center'
  }
})

export default styles
