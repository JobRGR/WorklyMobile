import {StyleSheet, Dimensions} from 'react-native'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },

  input: {
    width: window.width
  },

  wrapper: {
    backgroundColor: '#fff',
    marginTop: -10,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  row: {
    paddingBottom: 20
  },

  title: {
    fontSize: 16,
    color: '#5a5b5f'
  }
})

export default styles