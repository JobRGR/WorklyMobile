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
import {fetchStudents, updateCount, setCurrent, setSearch} from '../../actions/students'
import Error from '../../components/error'
import Loading from '../../components/loading'
import SideBar from '../../components/side_bar'
import More from '../../components/more'
import AuthInput from '../../components/auth_input'
import StudentItem from '../../components/student_item'
import short from '../../tools/short'
import check from '../../tools/check'
import styles from '../feed/feed.styles'

class StudentFeed extends Component {

  static propTypes = {
    fetchStudents: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired,
    setStudent: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired
  }

  componentWillMount() {
    (!this.props.data || !this.props.data.length) && this.props.fetchStudents()
  }

  setCurrent(student) {
    this.props.setStudent(student)
    Actions.student({title: short(student.name, 30)})
  }

  searchStudent(student) {
    return this.props.search
      .toLowerCase()
      .split(' ')
      .some(search =>
        check(student.name, search)
        || check(student.email, search)
        || (student.city && check(student.city.name, search))
        || student.skills.some(({name}) => check(name, search))
        || student.experiences.some(({companyName, position}) =>
          check(companyName.name, search) || check(position.name, search)
        )
        || student.educations.some(({speciality, university}) =>
          check(speciality.name, search) || check(university.name, search)
        )
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
              placeholder='Пошук студентів'
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
              .filter(student => this.searchStudent(student))
              .filter((_, index) => index < this.props.count)
              .map(student => <StudentItem onPress={() => this.setCurrent(student)} student={student} key={student._id} />)
          }
          {this.props.error && <Error />}
          {
            !this.props.error &&
            (this.props.data && this.props.data.length == 0) &&
            <Error text='Немає зарестрованих студентів' />
          }
          {
            !this.props.error &&
            this.props.data.filter(student => this.searchStudent(student)).length > this.props.count &&
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

const mapStateToProps = ({students}) => students
const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents()),
  updateCount: () => dispatch(updateCount),
  setStudent: data => dispatch(setCurrent(data)),
  setSearch: data => dispatch(setSearch(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentFeed)
