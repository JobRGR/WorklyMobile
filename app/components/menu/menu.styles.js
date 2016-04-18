import {StyleSheet, Dimensions} from 'react-native'
import {green as color} from '../../components/base/color'

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#3e7c5e',
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#fff'
  },

  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff'
  },

  avatarText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: "500",
    top: 17,
    left: 17,
    color
  },

  name: {
    position: 'absolute',
    paddingLeft: 10,
    fontSize: 16,
    left: 60,
    color: '#fff',
    top: 20
  },

  item: {
    fontSize: 16,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    textAlign: 'left',
    color: '#fff'
  },

  linkWrapper: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 1
  }
})

export default styles
