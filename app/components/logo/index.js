import React, {Component, View, Image} from 'react-native'
import styles from './logo.styles'
import uri from './logo.image'

class Logo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri}} style={{width: 150, height: 150}} />
      </View>
    )
  }
}

export default Logo
