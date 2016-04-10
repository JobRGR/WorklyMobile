import React, {Component, View, TextInput} from 'react-native'
import {connect} from 'react-redux'
import styles from './auth_input.styles'

class AuthInput extends Component {

  render() {
    return (
      <View>
        <TextInput
          keyboardType={this.props.keyboardType || 'default'}
          style={styles.input}
          maxLength={this.props.maxLength || 150}
          secureTextEntry={this.props.password}
          placeholderTextColor='#A5A5A5'
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText || (text => console.log(text))}
          value={this.props.value}
        />
      </View>
    )
  }
}

export default connect()(AuthInput)
