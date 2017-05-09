import React, {Component, PropTypes} from 'react'
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from '../../react-native-redux-router'
import Link from '../link'
import Avatar from '../avatar'
import {setCompany} from '../../actions/company'
import {setCurrent} from '../../actions/students'
import {updateMenu} from '../../actions/menu'
import short from '../../tools/short'
import styles from './menu.styles'


class Menu extends Component {

  static propTypes = {
    company: PropTypes.object,
    student: PropTypes.object,
    currentRoute: PropTypes.string.isRequired,
    updateMenu: PropTypes.func.isRequired,
    setStudent: PropTypes.func.isRequired,
    setCompany: PropTypes.func.isRequired
  }

  move(page) {
    this.props.updateMenu()
    page && page != this.props.currentRoute && Actions[page]()
  }

  toUserPage() {
    const {company, student} = this.props
    if (company) {
      this.props.setCompany(company)
      Actions.userCompany({title: short(company.name.name, 30)})
    }
    else if (student) {
      this.props.setStudent(student)
      Actions.userStudent({title: short(student.name, 30)})
    }
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>

        {
          (this.props.student || this.props.company) &&
          <TouchableWithoutFeedback onPress={() => this.toUserPage()}>
            <View style={styles.avatarContainer}>
              <Avatar student={this.props.student} company={this.props.company} white />
              {this.props.student && <Text style={styles.name}>{this.props.student.name}</Text>}
              {this.props.company && <Text style={styles.name}>{this.props.company.name.name}</Text>}
            </View>
          </TouchableWithoutFeedback>
        }

        <View style={styles.linkWrapper}>
          <Link
            withoutFeedBack
            onPress={() => this.move('feed')}
            style={styles.item}
            text='Вакансії'
          />
        </View>

        <View style={styles.linkWrapper}>
          <Link
            withoutFeedBack
            onPress={() => this.move('companyFeed')}
            style={styles.item}
            text='Компанії'
          />
        </View>

        <View style={styles.linkWrapper}>
          <Link
            withoutFeedBack
            onPress={() => this.move('studentFeed')}
            style={styles.item}
            text='Студенти'
          />
        </View>

        {
          this.props.company &&
          <View style={styles.linkWrapper}>
            <Link
              withoutFeedBack
              onPress={() => this.move('createVacancy')}
              style={styles.item}
              text='Створити вакансію'
            />
          </View>
        }

        {
          this.props.company &&
          <View style={styles.linkWrapper}>
            <Link
              withoutFeedBack
              onPress={() => this.move('companyVacancies')}
              style={styles.item}
              text='Мої вакансії'
            />
          </View>
        }

        {
          this.props.student &&
          <View style={styles.linkWrapper}>
            <Link
              withoutFeedBack
              onPress={() => this.move('roadMap')}
              style={styles.item}
              text='Дорожня Карта'
            />
          </View>
        }

      </ScrollView>
    );
  }
}

const mapStateToProps = ({user, routerReducer}) => ({...user, currentRoute: routerReducer.currentRoute})
const mapDispatchToProps = dispatch => ({
  updateMenu: () => dispatch(updateMenu(false)),
  setStudent: data => dispatch(setCurrent(data)),
  setCompany: data => dispatch(setCompany(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)