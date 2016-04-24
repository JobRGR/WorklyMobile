import React, {
  ScrollView,
  View,
  Image,
  Text,
  Component,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-redux-router'
import Link from '../link'
import {updateMenu} from '../../actions/menu'
import styles from './menu.styles'


class Menu extends Component {

  static propTypes = {
    company: PropTypes.object,
    student: PropTypes.object,
    currentRoute: PropTypes.string.isRequired,
    updateMenu: PropTypes.func.isRequired
  }

  getAvatar() {
    const {avatar, name} = this.props.student || this.props.company
    const text = name
      .trim()
      .split(' ')
      .slice(0, 2)
      .map(x => x.charAt(0))
      .join('')
      .toUpperCase()
    return avatar
      ? <Image source={{uri: avatar}} style={styles.avatar}/>
      : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{text}</Text>
        </View>
      )
  }

  move(page) {
    this.props.updateMenu()
    page && page != this.props.currentRoute && Actions[page]()
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        {
          (this.props.student || this.props.company) &&
          <View style={styles.avatarContainer}>
            {this.getAvatar()}
            <Text style={styles.name}>{this.props.student.name || this.props.company.name}</Text>
          </View>
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

      </ScrollView>
    );
  }
}

const mapStateToProps = ({user, routerReducer}) => ({...user, currentRoute: routerReducer.currentRoute})
const mapDispatchToProps = dispatch => ({updateMenu: () => dispatch(updateMenu(false))})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)