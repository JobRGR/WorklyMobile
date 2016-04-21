import React, {Text, Component, TouchableHighlight, PropTypes} from 'react-native'
import styles from './more.styles'

class More extends Component {

  static propTypes = {
    updateCount: PropTypes.func.isRequired
  };

  render() {
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.updateCount}>
        <Text style={styles.more}>Більше</Text>
      </TouchableHighlight>
    )
  }
}

export default More
