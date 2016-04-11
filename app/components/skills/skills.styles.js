import {StyleSheet} from 'react-native'
import {green as backgroundColor} from '../base/color'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
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
  }
})

export default styles
