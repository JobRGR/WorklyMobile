import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import Spinner from 'react-native-spinkit'
import {fetchVacancies, updateCount} from '../../actions/vacancies'
import VacancyItem from '../../components/vacancy_item'
import {color} from '../../components/nav_bar/nav_bar.styles'
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

  loading() {
    return (
      <View style={styles.spinner}>
        <Spinner size={70} type='ThreeBounce' isVisible={true} color={color}/>
      </View>
    )
  }

  content() {
    return (
      <ScrollView style={styles.container}>
        {
          this.props.data.length > 0
          && this.props.data
            .filter((_, index) => index < this.props.count)
            .map(vacancy => <VacancyItem vacancy={vacancy} key={vacancy._id} />)
        }
        {this.props.data.length > 0 && this.more()}
        {this.props.error && <Text>Error</Text>}
      </ScrollView>
    )
  }

  render() {
    return this.props.loading ? this.loading() : this.content()
  }
}

const mapStateToProps = ({vacancies}) => ({...vacancies})
const mapDispatchToProps = dispatch => ({
  fetchVacancies: () => dispatch(fetchVacancies()),
  updateCount: () => dispatch(updateCount)
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
