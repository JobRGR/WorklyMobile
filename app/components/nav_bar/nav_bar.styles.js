import {StyleSheet} from 'react-native'
import {green as backgroundColor} from '../base/color'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor
  },

  backWrapper: {
    position: 'absolute',
    top: 13,
    left: 11
  },

  back: {
    width: 14,
    height: 20
  },

  menu: {
    top: 2,
    width: 22,
    height: 15
  }
})

export default styles
