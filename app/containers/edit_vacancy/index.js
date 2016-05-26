import React, {Component, PropTypes, Text, View, ScrollView, TouchableWithoutFeedback} from 'react-native'
import {connect} from 'react-redux'
import {updateAbout, updateCity, updateName, updateSkill, editVacancy, addSkill, removeSkill} from '../../actions/edit_vacancy'
import AuthInput from '../../components/auth_input'
import short from '../../tools/short'
import Back from '../../components/back'
import Avatar from '../../components/avatar'
import Button from '../../components/button'
import styles from '../create_vacancy/create_vacancy.styles'


class EditVacancy extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorName: PropTypes.bool.isRequired,
    updateAbout: PropTypes.func.isRequired,
    updateCity: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
    updateSkill: PropTypes.func.isRequired,
    editVacancy: PropTypes.func.isRequired,
    removeSkill: PropTypes.func.isRequired,
    addSkill: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
  }

  onClick() {
    const {name, about, skills, city, company, id} = this.props
    this.props.editVacancy(id, {name, about, skills, city}, company)
  }

  render() {
    return (
      <Back>
        <View style={styles.container}>
          <View style={styles.row}>
            <Avatar company={this.props.company} />
            <View>
              <Text style={styles.companyName}>{short(this.props.company.name.name, 30)}</Text>
            </View>
          </View>
  
          <AuthInput
            placeholder='Назва вакансії'
            maxLength={200}
            style={styles.input}
            error={this.props.errorName && 'Назва необхідна'}
            onChangeText={this.props.updateName}
            value={this.props.name}
          />
          <AuthInput
            placeholder='Місто'
            maxLength={100}
            style={styles.input}
            onChangeText={this.props.updateCity}
            value={this.props.city}
          />
          <AuthInput
            placeholder='Про вакансію'
            maxLength={1000}
            style={styles.input}
            onChangeText={this.props.updateAbout}
            value={this.props.about}
            style={[styles.input, {height: 180}]}
            multiline
          />
  
          <View style={styles.row}>
            <AuthInput
              placeholder='Навички'
              maxLength={200}
              style={styles.rowInput}
              onChangeText={this.props.updateSkill}
              value={this.props.skill}
            />
            <Button
              style={styles.rowButton}
              onPress={() => this.props.skill.length && this.props.addSkill(this.props.skill)}
              text='Додати навичку'
            />
          </View>  
  
          {
            this.props.skills.length > 0 &&
            <View style={styles.skillContainer}>
              {this.props.skills.map((skill, index) =>
                <TouchableWithoutFeedback key={index} onPress={() => this.props.removeSkill(index)}>
                  <View style={styles.label}>
                    <Text style={styles.text}>{skill}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          }
  
          <Button
            loading={this.props.loading}
            onPress={() => this.onClick()}
            text='Редагувати вакаснію'
            style={styles.input}
          />
        </View>
      </Back>  
    )
  }
}

const mapStateToProps = ({editVacancy, user}) => ({
  ...editVacancy,
  company: user.company
})
const mapDispatchToProps = dispatch => ({
  updateAbout: data => dispatch(updateAbout(data)),
  updateCity: data => dispatch(updateCity(data)),
  updateName: data => dispatch(updateName(data)),
  updateSkill: data => dispatch(updateSkill(data)),
  editVacancy: (data, id, company) => dispatch(editVacancy(data, id, company)),
  addSkill: data => dispatch(addSkill(data)),
  removeSkill: data => dispatch(removeSkill(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditVacancy)
