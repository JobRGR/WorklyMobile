import React, {Component, Text, View, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-redux-router'
import Logo from '../../components/logo'
import Link from '../../components/link'
import styles from './home.styles'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.welcome}>
          Welcome to Workly!
        </Text>
        <Text style={styles.sub}>
          Найкращий інструмент для пошуку вакансій для студентів
        </Text>
        <Link onPress={Actions.signup} text='Зареєструватись' />
        <Link onPress={Actions.login} text='Увійти' />
      </View>
    )
  }
}

export default Home
