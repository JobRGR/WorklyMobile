import React, {Component, PropTypes} from 'react'
import {
  Text,
  ScrollView,
  View
} from 'react-native'
import {updateCompany} from '../../actions/user'
import {connect} from 'react-redux'
import short from '../../tools/short'
import Back from '../../components/back'
import AuthInput from '../../components/auth_input'
import Button from '../../components/button'
import Avatar from '../../components/avatar'
import styles from '../company/company.styles'

class EditCompany extends Component {
  static propTypes = {
    company: PropTypes.object.isRequired,
    loading:  PropTypes.bool.isRequired
  };

  onClick() {
    this.props.updateCompany(this.props.company._id, {
      city: this.refs.city._input,
      site: this.refs.site._input,
      about: this.refs.about._input,
    })
  }

  render() {
    return (
      <Back>
        <ScrollView style={styles.container}>
          <View style={styles.row}>
            <Avatar company={this.props.company} />
            <View>
              <Text style={styles.title}>{short(this.props.company.name.name, 30)}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <AuthInput
              placeholder='Сайт'
              maxLength={200}
              ref="site"
              style={styles.input}
              defaultValue={this.props.company.site}
            />
            <AuthInput
              placeholder='Місто'
              maxLength={100}
              style={styles.input}
              ref="city"
              defaultValue={this.props.company.city ? this.props.company.city.name : ''}
            />
            <AuthInput
              placeholder='Про компанію'
              maxLength={1000}
              defaultValue={this.props.company.about}
              ref="about"
              style={[styles.input, {height: 180}]}
              multiline
            />
          </View>
          <Button
            loading={this.props.loading}
            onPress={() => this.onClick()}
            text='Редагувати компанію'
            style={styles.input}
          />
        </ScrollView>
      </Back>
    )
  }
}

const mapStateToProps = ({user}) => ({company: user.company, loading: user.loading})
const mapDispatchToProps = dispatch => ({
  updateCompany: (id, body) => dispatch(updateCompany(id, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany)
