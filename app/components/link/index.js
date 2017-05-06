import React, {Component, PropTypes} from 'react'
import {Text, View, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import styles from './link.styles'

class Link extends Component {

  render() {
    const Element = this.props.withoutFeedBack ? TouchableWithoutFeedback : TouchableHighlight
    return (
      <View>
        <Element
          underlayColor={this.props.underlayColor || 'white'}
          onPress={this.props.onPress}>
          <View>
            <Text style={[styles.link, this.props.style]}>
              {this.props.text}
            </Text>
          </View>
        </Element>
      </View>
    )
  }
}

export default Link
