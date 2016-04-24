import {StyleSheet} from 'react-native'
import {green as color} from '../../components/base/color'

const styles = StyleSheet.create({
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    marginBottom: 10
  },

  whiteAvatar: {
    backgroundColor: "#fff"
  },

  whiteText: {
    color
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: color
  },

  avatarText: {
    position: 'absolute',
    fontSize: 21,
    fontWeight: "500",
    top: 17,
    left: 16,
    color: '#fff'
  }
})

export default styles
