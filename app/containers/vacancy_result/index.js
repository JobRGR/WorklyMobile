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
import {setCurrent} from '../../actions/students'
import Error from '../../components/error'
import Back from '../../components/back'
import StudentItem from '../../components/student_item'
import short from '../../tools/short'
import styles from '../feed/feed.styles'

class VacancyResult extends Component {

  static propTypes = {
    vacancy: PropTypes.object.isRequired,
    setStudent: PropTypes.func.isRequired
  }

  setCurrent(student) {
    this.props.setStudent(student)
    Actions.student({title: short(student.name, 30)})
  }

  render() {
    return (
      <Back>
        <ScrollView style={styles.container}>
          {
            this.props.vacancy.testsResults.length > 0
            ? this.props.vacancy.testsResults
              .sort((a, b) => -(a.correct - b.correct))
              .map(({student, correct}, index) =>
                <View key={`${student._id}${index}`}>
                  <Text style={styles.leftIcon}>
                    {correct} з {this.props.vacancy.openQuestions.length + this.props.vacancy.testQuestions.length}
                  </Text>
                  <View style={styles.shortItem}>
                    <StudentItem onPress={() => this.setCurrent(student)} student={student} />
                  </View>
                 </View>
              )
            : <Error text='Немає відклінувшихся студентів' />
          }
        </ScrollView>
      </Back>
    )
  }
}

const mapStateToProps = ({companyVacancies}) => ({vacancy: companyVacancies.current})
const mapDispatchToProps = dispatch => ({setStudent: data => dispatch(setCurrent(data))})

export default connect(mapStateToProps, mapDispatchToProps)(VacancyResult)
