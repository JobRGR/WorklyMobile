import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import {fetchVacancies, updateCount} from '../../actions/vacancies'
import VacancyItem from '../../components/vacancy_item'
import styles from './feed.styles'

class Feed extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchVacancies()
  }

  more() {
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.updateCount}>
        <Text style={styles.more}>Більше</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.props.data.length > 0
          && this.props.data
            .filter((_, index) => index < this.props.count)
            .map(vacancy => <VacancyItem vacancy={vacancy} key={vacancy._id} />)
        }
        {this.props.data.length > 0 && this.more()}
        {this.props.loading && <Text>Loading</Text>}
        {this.props.error && <Text>Error</Text>}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({vacancies}) => ({...vacancies})
const mapDispatchToProps = dispatch => ({
  fetchVacancies: () => dispatch(fetchVacancies()),
  updateCount: () => dispatch(updateCount)
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
