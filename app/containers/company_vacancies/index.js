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
import Swipeout from 'react-native-swipeout'
import {setCurrent} from '../../actions/vacancies'
import {fetchVacancies, updateCount, removeVacancy, setVacancy as setVacancyResult} from '../../actions/company_vacancies'
import {setVacancy} from '../../actions/edit_vacancy'
import Error from '../../components/error'
import Loading from '../../components/loading'
import SideBar from '../../components/side_bar'
import More from '../../components/more'
import VacancyItem from '../../components/vacancy_item'
import short from '../../tools/short'
import styles from './company_vacancies.styles'
import {red, green} from '../../components/base/color'

class CompanyVacancies extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,
    vacancies: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
    removeVacancy: PropTypes.func.isRequired,
    company: PropTypes.object,
    setVacancy: PropTypes.func.isRequired,
    setVacancyResult: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchVacancies(this.props.company.name.name)
  }

  setCurrent(vacancy) {
    this.props.setCurrent(vacancy._id)
    Actions.vacancy({title: short(vacancy.name, 25)})
  }

  editVacancy(vacancy) {
    this.props.setVacancy(vacancy)
    Actions.editVacancy()
  }

  setVacancy({_id, name}) {
    this.props.setVacancyResult(_id)
    Actions.vacancyResult({title: short(name, 25)})
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            !this.props.error &&
            this.props.vacancies &&
            this.props.vacancies.length > 0 &&
            this.props.vacancies
              .filter((_, index) => index < this.props.count)
              .map(vacancy => {
                const swipeoutBtns = [
                  {
                    text: '≡',
                    backgroundColor: '#4078C0',
                    onPress: () => this.setVacancy(vacancy)
                  },
                  {
                    text: '✎',
                    backgroundColor: green,
                    onPress: () => this.editVacancy(vacancy)
                  },
                  {
                    text: '✕',
                    backgroundColor: red,
                    onPress: () => this.props.removeVacancy(vacancy._id)
                  }
                ]
                return (
                  <Swipeout backgroundColor='#fff000' key={vacancy._id} right={swipeoutBtns} autoClose>
                    <VacancyItem style={styles.vacancy}  onPress={() => this.setCurrent(vacancy)} vacancy={vacancy} widthoutAbout />
                  </Swipeout>
                )
              })
          }
          {this.props.error && <Error />}
          {(this.props.vacancies && this.props.vacancies.length == 0) && <Error text='У вас не має вакасній' />}
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
  setCurrent: data => dispatch(setCurrent(data)),
  removeVacancy: data => dispatch(removeVacancy(data)),
  setVacancy: data => dispatch(setVacancy(data)),
  setVacancyResult: data => dispatch(setVacancyResult(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyVacancies)
