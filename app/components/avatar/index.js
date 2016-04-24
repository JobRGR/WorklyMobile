import React, {Component, View, Image, Text} from 'react-native'
import styles from './avatar.styles'

class Avatar extends Component {

  render() {
    const {avatar, name} = this.props.student || this.props.company
    const text = (this.props.company ? name.name : name)
      .trim()
      .split(' ')
      .slice(0, 2)
      .map(x => x.charAt(0))
      .join('')
      .toUpperCase()
    return avatar
      ? <Image source={{uri: `${avatar}?${Math.random()}`}} style={styles.image} />
      : (
      <View style={[styles.avatar, styles.image, this.props.white && styles.whiteAvatar]}>
        <Text style={[styles.avatarText, this.props.white && styles.whiteText]}>{text}</Text>
      </View>
    )
  }
}

export default Avatar
