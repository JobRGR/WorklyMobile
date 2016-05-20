import {StyleSheet, Dimensions} from 'react-native'
import {red as backgroundColor} from '../../components/base/color'

const window = Dimensions.get('window')


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  
  input: {
    width: window.width - 50
  },

  label: {
    backgroundColor,
    paddingTop: 4,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 4,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 4
  },

  text: {
    fontSize: 14,
    color: '#fff'
  },

  companyName: {
    color: '#5a5b5f',
    fontSize: 21,
    marginTop: 20
  },

  skillContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10
  },

  row: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  },
})

export default styles
