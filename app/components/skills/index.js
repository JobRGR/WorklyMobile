import React, {Component, View, Text} from 'react-native'
import styles from './skills.styles'

class Logo extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.skills.map(skill =>
          <View style={styles.label} key={skill._id}>
            <Text style={styles.text}>{skill.name}</Text>
          </View>
        )}
      </View>
    )
  }
}

export default Logo
