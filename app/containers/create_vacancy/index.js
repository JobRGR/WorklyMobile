import React, {Component, PropTypes, Text, View, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {updateAbout, updateCity, updateName, updateSkills, createVacancy} from '../../actions/create_vacancy'
import AuthInput from '../../components/auth_input'
import short from '../../tools/short'
import Avatar from '../../components/avatar'
import Button from '../../components/button'
import styles from './create_vacancy.styles'


class CreateVacancy extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorName: PropTypes.bool.isRequired,
    updateAbout: PropTypes.func.isRequired,
    updateCity: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
    updateSkills: PropTypes.func.isRequired,
    createVacancy: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
  }

  onClick() {
    const {name, about, skills, city} = this.props
    this.props.createVacancy({name, about, skills, city})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar company={this.props.company} />
          <View>
            <Text style={styles.companyName}>{short(this.props.company.name.name, 30)}</Text>
          </View>
        </View>

        <AuthInput
          placeholder='Назва вакансії'
          maxLength={200}
          error={this.props.errorName && 'Назва необхідна'}
          onChangeText={this.props.updateName}
          value={this.props.name}
        />
        <AuthInput
          placeholder='Місто'
          maxLength={100}
          onChangeText={this.props.updateCity}
          value={this.props.city}
        />
        <AuthInput
          placeholder='Про вакансію'
          maxLength={1000}
          onChangeText={this.props.updateAbout}
          value={this.props.about}
          style={{height: 270}}
          multiline
        />
        <AuthInput
          placeholder='Навички'
          maxLength={200}
          onChangeText={this.props.updateSkills}
          value={this.props.skills}
        />

        <Button loading={this.props.loading} onPress={() => this.onClick()} text='Створити вакансію' />
      </ScrollView>
    )
  }
}

const mapStateToProps = ({createVacancy, user}) => ({
  ...createVacancy,
  company: user.company
})
const mapDispatchToProps = dispatch => ({
  updateAbout: data => dispatch(updateAbout(data)),
  updateCity: data => dispatch(updateCity(data)),
  updateName: data => dispatch(updateName(data)),
  updateSkills: data => dispatch(updateSkills(data)),
  createVacancy: data => dispatch(createVacancy(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateVacancy)
