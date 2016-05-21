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
import {Actions} from 'react-native-redux-router'
import {setCurrent} from '../../actions/vacancies'
import {fetchVacancies, updateCount} from '../../actions/company_vacancies'
import Error from '../../components/error'
import Loading from '../../components/loading'
import SideBar from '../../components/side_bar'
import More from '../../components/more'
import VacancyItem from '../../components/vacancy_item'
import short from '../../tools/short'
import styles from './company_vacancies.styles'

class CompanyVacancies extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,
    vacancies: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
  }

  componentWillMount() {
    !this.props.vacancies && this.props.fetchVacancies(this.props.company.name.name)
  }

  setCurrent(vacancy) {
    this.props.setCurrent(vacancy._id)
    Actions.vacancy({title: short(vacancy.name, 30)})
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            !this.props.error &&
            this.props.vacancies &&
            this.props.vacancies
              .filter((_, index) => index < this.props.count)
              .map(vacancy => <VacancyItem onPress={() => this.setCurrent(vacancy)} vacancy={vacancy} key={vacancy._id} />)
          }
          {this.props.error && <Error />}
          {
            !this.props.error
            && this.props.vacancies
            && this.props.vacancies.length > this.props.count
            && <More updateCount={this.props.updateCount} />
          }
        </ScrollView>
      </SideBar>
    )
  }

  render() {
    return this.props.loading ? <Loading /> : this.content()
  }
}

const mapStateToProps = ({companyVacancies, user}) => ({
  company: user.company,
  ...companyVacancies
})
const mapDispatchToProps = dispatch => ({
  fetchVacancies: companyName => dispatch(fetchVacancies(companyName)),
  updateCount: () => dispatch(updateCount),
  setCurrent: data => dispatch(setCurrent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyVacancies)
