import React, {Text, Component, View} from 'react-native'
import styles from './error.styles'

class Error extends Component {

  render() {
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.error}>Просимо пробачення за тимчасові проблеми</Text>
        <Text style={styles.error}>Спробуйте пізніше ;(</Text>
      </View>
    )
  }
}

export default Error
