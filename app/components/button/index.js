import React, {Component, PropTypes} from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './button.styles'


class Button extends Component {

  button() {
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.onPress}>
        <Text style={[styles.button, this.props.style]}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }

  loading() {
    return (
      <View style={[styles.spinnerContainer, this.props.style]}>
        <Spinner style={styles.spinner} size={55} type='ThreeBounce' isVisible={true} color='#ffffff' />
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.props.loading ? this.loading() : this.button()}
      </View>
    )
  }
}

export default Button
