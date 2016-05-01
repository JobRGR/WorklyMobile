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
import {fetchStudents, updateCount, setCurrent} from '../../actions/students'
import Error from '../../components/error'
import Loading from '../../components/loading'
import SideBar from '../../components/side_bar'
import More from '../../components/more'
import StudentItem from '../../components/student_item'
import short from '../../tools/short'
import styles from '../feed/feed.styles'

class StudentFeed extends Component {

  static propTypes = {
    fetchStudents: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired,
    setStudent: PropTypes.func.isRequired
  }

  componentWillMount() {
    (!this.props.data || !this.props.data.length) && this.props.fetchStudents()
  }

  setCurrent(student) {
    this.props.setStudent(student)
    Actions.student({title: short(student.name, 30)})
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            !this.props.error &&
            this.props.data.length > 0 &&
            this.props.data
              .filter((_, index) => index < this.props.count)
              .map(student => <StudentItem onPress={() => this.setCurrent(student)} student={student} key={student._id} />)
          }
          {this.props.error && <Error />}
          {!this.props.error && this.props.data.length > 0 && <More updateCount={this.props.updateCount} />}
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
  setStudent: data => dispatch(setCurrent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentFeed)
