import React, {Component, View, TextInput} from 'react-native'
import styles from './auth_input.styles'

class AuthInput extends Component {

  render() {
    return (
      <View>
        <TextInput
          keyboardType={this.props.keyboardType || 'default'}
          style={styles.input}
          secureTextEntry={this.props.password}
          placeholderTextColor='#575757'
          placeholder={this.props.placeholder}
          onChangeText={text => console.log(text)}
        />
      </View>
    )
  }
}

export default AuthInput
