import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions
} from 'react-native'
import {connect} from 'react-redux'
import {subscribeVacancy} from '../../actions/vacancies'
import Skills from '../../components/skills'
import CheckBox from 'react-native-checkbox'
import AuthInput from '../../components/auth_input'
import Button from '../../components/button'
import Back from '../../components/back'
import short from '../../tools/short'
import {fetchCompany} from '../../actions/company'
import Avatar from '../../components/avatar'
import styles from '../company/company.styles'

const window = Dimensions.get('window')

class Vacancy extends Component {
  static state = PropTypes.object.isRequired;
  static propTypes = {
    vacancy: PropTypes.object.isRequired,
    isStudent: PropTypes.bool.isRequired,
    subscribeLoading: PropTypes.bool.isRequired,
    fetchCompany: PropTypes.func.isRequired,
    subscribeVacancy: PropTypes.func.isRequired
  };

  constructor() {
    super()
    this.state = {
      update: 1
    }
  }

  updateCheckBox(id, index, checked) {
    const [checkBoxRef] = Object.keys(this.refs).filter(ref => ref == `checkBox${id}_${index}`)
    checked && Object.keys(this.refs).forEach(ref => ref.includes(`checkBox${id}`) && (this[ref] = false))
    this[checkBoxRef] = checked
    this.setState(({update}) => ({update: update * -1}))
  }

  onSubscribe() {
    const testRef = Object.keys(this.refs).filter(ref => this[ref])
    const openRef = Object.keys(this.refs).filter(ref => ref.includes('input'))
    const testAnswers = this.props.vacancy.testQuestions.map(({_id}) => {
      const [checkBoxRef] = testRef.filter(ref => ref.includes(`checkBox${_id}`))
      if (!checkBoxRef) return null
      const [, index] = checkBoxRef.split('_')
      return parseInt(index)
    })
    const openAnswers = this.props.vacancy.openQuestions.map(({_id}) => {
      const [checkBoxRef] = openRef.filter(ref => ref.includes(`input${_id}`))
      return this.refs[checkBoxRef]._input
    })
    const testsResults = {testAnswers, openAnswers}
    this.props.subscribeVacancy(this.props.vacancy._id, {testsResults})
  }

  subscribe() {
    const isTest = (
      Array.isArray(this.props.vacancy.testQuestions) &&
      this.props.vacancy.testQuestions.length > 0
    )
    const isOpen = (
      Array.isArray(this.props.vacancy.openQuestions) &&
      this.props.vacancy.openQuestions.length > 0
    )
    return (
      <View style={styles.vacanciesWrapper}>
        {(isTest || isOpen) && <Text style={styles.vacanciesWrapperTitle}>Тестові завдання:</Text>}
        {
          isTest &&
          this.props.vacancy.testQuestions.map(({_id, question, answer}) =>
            <View key={_id} style={styles.vacancy}>
              <Text style={[styles.question, styles.vacancyWrapper]}>{question}</Text>
              {answer.map((ans, index) =>
                <CheckBox
                  key={index}
                  ref={`checkBox${_id}_${index}`}
                  labelStyle={{fontSize: 14, color: '#5a5b5f', width: window.width - 80, marginBottom: 5}}
                  label={ans}
                  checked={this[`checkBox${_id}_${index}`] || false}
                  onChange={checked => this.updateCheckBox(_id, index, checked)}
                />
              )}
            </View>
          )
        }
        {
          isOpen &&
          this.props.vacancy.openQuestions.map(({_id, question}) =>
            <View key={_id} style={[styles.vacancy, styles.vacancyWrapper]}>
              <Text style={[styles.question, styles.vacancyWrapper]}>{question}</Text>
              <AuthInput ref={`input${_id}`} style={[styles.input, {marginLeft: -5}]} placeholder='Відповідь' maxLength={1000}  />
            </View>
          )
        }
        <Button
          style={styles.input}
          loading={this.props.subscribeLoading}
          onPress={() => this.onSubscribe()}
          text='Відкликнутись на ваканісію'
          style={styles.input}
        />
      </View>
    )
  }

  haveSubscription() {
    return (
      <View style={styles.vacanciesWrapper}>
        <Text style={styles.subscribeTitle}>
          ✓ Ви успішно відкликнулись на вакансію {short(this.props.vacancy.name, 40)}
        </Text>
      </View>
    )
  }

  render() {
    const {name, _id: id} = this.props.vacancy.company
    const {name: companyName} = name
    return (
      <Back>
        <ScrollView style={styles.container}>
          <View style={styles.row}>
            <Avatar company={this.props.vacancy.company} />
            <View>
              <Text style={styles.title}>{short(this.props.vacancy.name, 30)}</Text>
              <View style={[styles.row, styles.subRow]}>
                <Text style={styles.sub} onPress={() => this.props.fetchCompany(id, companyName)}>{companyName}</Text>
                {this.props.vacancy.city && <Text style={styles.text}> | </Text>}
                {this.props.vacancy.city && <Text style={styles.text}>{this.props.vacancy.city.name}</Text>}
              </View>
            </View>
          </View>
          <Text style={[styles.about, styles.text]}>{this.props.vacancy.about}</Text>
          {this.props.vacancy.skills && <Skills skills={this.props.vacancy.skills} />}
          {this.props.isStudent && (this.props.vacancy.haveSubscription ? this.haveSubscription() : this.subscribe())}
        </ScrollView>
      </Back>
    )
  }
}

const mapStateToProps = ({vacancies, user}) => ({
  vacancy: vacancies.current,
  subscribeLoading: vacancies.subscribeLoading,
  isStudent: user.student != undefined
})
const mapDispatchToProps =  dispatch => ({
  fetchCompany: (id, title) => dispatch(fetchCompany(id, title)),
  subscribeVacancy: (id, data) => dispatch(subscribeVacancy(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vacancy)
