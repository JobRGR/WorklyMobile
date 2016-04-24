import {StyleSheet} from 'react-native'
import {green as backgroundColor} from '../../components/base/color'
import stylesVacancy from '../vacancy_item/vacancy_item.styles'

const styles = StyleSheet.create({
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor
  },

  avatarText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: "500",
    top: 17,
    left: 17,
    color: '#fff'
  }
})

export default StyleSheet.flatten([styles, stylesVacancy])
