import React, {Component, PropTypes, Text, ScrollView, Image} from 'react-native'
import {connect} from 'react-redux'
import {fetchVacancies} from '../../actions/vacancies'
import VacancyItem from '../../components/vacancy_item'
import styles from './feed.styles'

class Feed extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }

  componentWillMount() {
    this.props.fetchVacancies()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.data.length > 0 && this.props.data.splice(0, 15).map(vacancy => <VacancyItem vacancy={vacancy} key={vacancy._id} />)}
        {this.props.loading && <Text>Loading</Text>}
        {this.props.error && <Text>Error</Text>}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({vacancies}) => ({...vacancies})
const mapDispatchToProps = dispatch => ({fetchVacancies: () => dispatch(fetchVacancies())})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
