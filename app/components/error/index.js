import React, {Component, PropTypes} from 'react'
import {Text, View} from 'react-native'
import styles from './error.styles'

class Error extends Component {

  customText() {
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.error}>{this.props.text}</Text>
      </View>
    )
  }
  
  defaultText() {
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.error}>Просимо пробачення за тимчасові проблеми</Text>
        <Text style={styles.error}>Спробуйте пізніше ;(</Text>
      </View>
    )
  }
  
  render() {
    return this.props.text ? this.customText() : this.defaultText()
  }
}

export default Error
