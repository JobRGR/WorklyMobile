import React, {Text, Component, View} from 'react-native'
import Spinner from 'react-native-spinkit'
import {green as color} from '../base/color'
import styles from './loading.styles'

class Loading extends Component {

  render() {
    return (
      <View style={styles.spinner}>
        <Spinner size={70} type='ThreeBounce' isVisible={true} color={color} />
      </View>
    )
  }
}

export default Loading
