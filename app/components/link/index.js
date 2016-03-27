import React, {Component, Text, View, TouchableHighlight} from 'react-native'
import styles from './link.styles'

class Link extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onPress}>
          <Text style={styles.link}>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Link
