import React, {Component, Text, View, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-redux-router'
import styles from './home.styles'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Workly!
        </Text>
        <Text style={styles.sub}>
          Найкращий інструмент для пошуку вакансій для студентів
        </Text>
        <TouchableHighlight onPress={Actions.signup}>
          <Text style={styles.button}>Зареєструватись</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.login}>
          <Text style={styles.button}>Увійти</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Home
