import {StyleSheet, Dimensions} from 'react-native'
import {green as color} from '../../components/base/color'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },

  input: {
    width: window.width - 40
  },

  sub: {
    color,
    fontSize: 14
  },

  title: {
    color: '#5a5b5f',
    fontSize: 21,
    marginTop: 10
  },

  text: {
    color: '#5a5b5f',
    fontSize: 14
  },

  about: {
    lineHeight: 21
  },

  row: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  },

  subMargin: {
    marginTop: 5,
    marginBottom: 5
  },

  info: {
    marginTop: 10,
    marginBottom: 10
  },

  vacancy: {
    marginTop: 5,
    marginBottom: 5
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

  subscribeTitle: {
    color,
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
  },
  
  contentWidth: {
    width: window.width * 0.85,
    paddingBottom: 30
  }
})

export default styles
