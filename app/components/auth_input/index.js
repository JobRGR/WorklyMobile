import React, {Component, View, TextInput, Text} from 'react-native'
import styles from './auth_input.styles'

class AuthInput extends Component {

  render() {
    return (
      <View>
        <TextInput
          keyboardType={this.props.keyboardType || 'default'}
          style={[styles.input, this.props.error && styles.error, this.props.style]}
          maxLength={this.props.maxLength || 150}
          secureTextEntry={this.props.password}
          placeholderTextColor='#A5A5A5'
          multiline={this.props.multiline}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText || (text => this._input = text)}
          value={this.props.value}
        />
        {this.props.error && typeof this.props.error === 'string' && <Text style={styles.errorText}>{this.props.error}</Text>}
      </View>
    )
  }
}

export default AuthInput
