import React, {Component, PropTypes} from 'react'
import {
  Text,
  ScrollView,
  View
} from 'react-native'
import {connect} from 'react-redux'
import {updateStudent} from '../../actions/user'
import Skills from '../../components/skills'
import short from '../../tools/short'
import Back from '../../components/back'
import Avatar from '../../components/avatar'
import AuthInput from '../../components/auth_input'
import Button from '../../components/button'
import styles from '../company/company.styles'

class Student extends Component {

  static propTypes = {
    student: PropTypes.object.isRequired
  };

  onClick() {
    this.props.updateStudent(this.props.student._id, {
      city: this.refs.city._input,
      dob: this.refs.dob._input,
      about: this.refs.about._input,
      telephone: this.refs.telephone._input,
    })
  }

  render() {
    return (
      <Back>
        <ScrollView style={styles.container}>
          <View style={styles.row}>
            <Avatar student={this.props.student} />
            <View>
              <Text style={styles.title}>{short(this.props.student.name, 30)}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <AuthInput
              placeholder='Дата народження'
              maxLength={200}
              ref="dob"
              style={styles.input}
              defaultValue={this.props.student.dob}
            />
            <AuthInput
              placeholder='Місто'
              maxLength={100}
              style={styles.input}
              ref="city"
              defaultValue={this.props.student.city ? this.props.student.city.name : ''}
            />
            <AuthInput
              placeholder='Телефон'
              maxLength={100}
              style={styles.input}
              ref="telephone"
              defaultValue={this.props.student.telephone}
            />
            <AuthInput
              placeholder='Про студента'
              maxLength={1000}
              defaultValue={this.props.student.about}
              ref="about"
              style={[styles.input, {height: 180}]}
              multiline
            />
          </View>
          <Button
            loading={this.props.loading}
            onPress={() => this.onClick()}
            text='Редагувати студента'
            style={styles.input}
          />
        </ScrollView>
      </Back>
    )
  }
}

const mapStateToProps = ({user}) => ({student: user.student, loading: user.loading})
const mapDispatchToProps = dispatch => ({
  updateStudent: (id, body) => dispatch(updateStudent(id, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Student)
