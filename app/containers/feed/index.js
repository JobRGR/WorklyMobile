import React, {Component, PropTypes} from 'react'
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from '../../react-native-redux-router'
import {fetchVacancies, updateCount, setCurrent, setSearch} from '../../actions/vacancies'
import Error from '../../components/error'
import Loading from '../../components/loading'
import SideBar from '../../components/side_bar'
import AuthInput from '../../components/auth_input'
import More from '../../components/more'
import VacancyItem from '../../components/vacancy_item'
import short from '../../tools/short'
import check from '../../tools/check'
import styles from './feed.styles'

class Feed extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    updateCount: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired
  }

  componentWillMount() {
    (!this.props.data || !this.props.data.length) && this.props.fetchVacancies()
  }

  setCurrent(vacancy) {
    this.props.setCurrent(vacancy._id)
    Actions.vacancy({title: short(vacancy.name, 30)})
  }

  searchVacancy(vacancy) {
    return this.props.search
      .toLowerCase()
      .split(' ')
      .some(search =>
        check(vacancy.name, search)
        || (vacancy.city && check(vacancy.city.name, search))
        || check(vacancy.company.name.name, search)
        || vacancy.skills.some(({name}) => check(name, search))
      )
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            !this.props.error &&
            this.props.data.length > 0 &&
            <AuthInput
              placeholder='Пошук вакансій'
              maxLength={200}
              style={styles.input}
              onChangeText={this.props.setSearch}
              value={this.props.search}
            />
          }
          {
            this.props.search.length > 0 &&
            <Text style={styles.remove} onPress={this.props.setSearch}>✕</Text>
          }
          {
            !this.props.error &&
            this.props.data.length > 0 &&
            this.props.data
              .filter(vacancy => this.searchVacancy(vacancy))
              .filter((_, index) => index < this.props.count)
              .map(vacancy => <VacancyItem onPress={() => this.setCurrent(vacancy)} vacancy={vacancy} key={vacancy._id} />)
          }
          {this.props.error && <Error />}
          {
            !this.props.error && (this.props.data && this.props.data.length == 0) &&
            <Error text='Ваканісій немає' />
          }
          {
            !this.props.error &&
            this.props.data.filter(vacancy => this.searchVacancy(vacancy)).length > this.props.count &&
            <More updateCount={this.props.updateCount} />
          }
        </ScrollView>
      </SideBar>
    )
  }

  render() {
    return this.props.loading ? <Loading /> : this.content()
  }
}

const mapStateToProps = ({vacancies}) => vacancies
const mapDispatchToProps = dispatch => ({
  fetchVacancies: () => dispatch(fetchVacancies()),
  updateCount: () => dispatch(updateCount),
  setCurrent: data => dispatch(setCurrent(data)),
  setSearch: data => dispatch(setSearch(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
