import React, {Component, PropTypes, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {fetchVacancies} from '../../actions/vacancies'
import styles from './feed.styles'

class Feed extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,

  }

  componentWillMount() {
    this.props.fetchVacancies()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Feed</Text>
      </View>
    )
  }
}

const mapStateToProps = ({vacanies}) => ({...vacanies})
const mapDispatchToProps = dispatch => ({fetchVacancies: () => dispatch(fetchVacancies())})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
