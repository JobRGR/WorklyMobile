import React, {
  Component,
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './logo.styles'
import uri from './logo.image'

class Logo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri}} style={styles.image} />
      </View>
    )
  }
}

export default Logo
