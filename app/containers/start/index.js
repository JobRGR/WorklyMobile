import React, {Component, PropTypes, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/user'
import Logo from '../../components/logo'
import styles from './start.styles'

class Start extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.welcome}>
          Welcome to Workly!
        </Text>
      </View>
    )
  }
}

export default connect()(Start)
