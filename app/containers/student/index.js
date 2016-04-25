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
import formatDate from '../../tools/format_date'
import styles from '../company/company.styles'

class Student extends Component {

  static propTypes = {
    student: PropTypes.object.isRequired
  };

  showExperience() {
    return (
      <View>
        {
          this.props.student.experiences.map(({about, companyName, position, start, end}, index) => (
            <View style={styles.info} key={index}>
              <Text style={styles.text}><Text style={styles.sub}>{position.name}</Text> в {companyName.name}</Text>
              <Text style={[styles.text, styles.subMargin]}>{formatDate(start)} - {formatDate(end)}</Text>
              {about && <Text style={styles.text}>{short(about, 350)}</Text>}
            </View>
          ))
        }
      </View>
    )
  }

  render() {
    const position = getPosition(this.props.student)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar student={this.props.student} />
          <View>
            <Text style={styles.title}>{short(this.props.student.name, 30)}</Text>
          </View>
        </View>
        <View style={styles.info}>
          {position && <Text style={styles.text}>Позиція: <Text style={styles.sub}>{position}</Text></Text>}
          {this.props.student.city && <Text style={styles.text}>Місто:  <Text style={styles.sub}>{this.props.student.city.name}</Text></Text>}
          {this.props.student.dob && <Text style={styles.text}>Дата народження: <Text style={styles.sub}>{formatDate(this.props.student.dob)}</Text></Text>}
          {this.props.student.email && <Text style={styles.text}>Email: <Text style={styles.sub}>{this.props.student.email}</Text></Text>}
          {this.props.student.telephone && <Text style={styles.text}>Телефон:  <Text style={styles.sub}>{this.props.student.telephone}</Text></Text>}
        </View>
        <Text style={[styles.about, styles.text]}>{this.props.student.about}</Text>
        {this.props.student.skills && <Skills skills={this.props.student.skills} />}
        {this.props.student.experiences && this.props.student.experiences.length && this.showExperience()}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({students}) => ({student: students.current})

export default connect(mapStateToProps)(Student)
