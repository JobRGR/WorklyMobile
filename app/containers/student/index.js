import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import Skills from '../../components/skills'
import short from '../../tools/short'
import Avatar from '../../components/avatar'
import getPosition from '../../tools/get_position'
import styles from '../company/company.styles'

class Student extends Component {

  static propTypes = {
    student: PropTypes.object.isRequired
  };

  render() {
    const position = getPosition(this.props.student)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar student={this.props.student} />
          <View>
            <Text style={styles.title}>{short(this.props.student.name, 30)}</Text>
            <View style={[styles.row, styles.subRow]}>
              {position && <Text style={styles.sub}>{short(position, 20)}</Text>}
              {this.props.student.city && <Text style={styles.text}> | </Text>}
              {this.props.student.city && <Text style={styles.text}>{this.props.student.city.name}</Text>}
            </View>
          </View>
        </View>
        <Text style={[styles.about, styles.text]}>{this.props.student.about}</Text>
        {this.props.student.skills && <Skills skills={this.props.student.skills} />}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({students}) => ({student: students.current})

export default connect(mapStateToProps)(Student)
