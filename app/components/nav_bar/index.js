import React, {Component, Image, View, TouchableWithoutFeedback, PropTypes} from 'react-native'
import NavigationBar from 'react-native-navbar'
import {connect} from 'react-redux'
import {Actions} from 'react-native-redux-router'
import {logoutUser} from '../../actions/user'
import {updateMenu} from '../../actions/menu'
import styles from './nav_bar.styles'
import backImage from './back.image'
import menuImage from './menu.image'
import {green as color} from '../base/color'


const statusBar = {
  barStyle:'light-content',
  hidden: false,
  tintColor: color
}

export class NavBarBack extends Component {
  render() {
    return (
      <NavigationBar
        style={styles.navBar}
        titleColor='#fff'
        buttonsColor='white'
        statusBar={statusBar}
        title={{
          title: this.props.title || 'Workly',
          tintColor: '#fff'
        }}
        leftButton={(
          <View style={styles.backWrapper}>
            <TouchableWithoutFeedback onPress={this.props.onPrev || Actions.pop}>
              <Image source={{uri: backImage}} style={styles.back} />
            </TouchableWithoutFeedback>
           </View>
        )} />
    )
  }
}

export class NavBarAuth extends Component {
  render() {
    return (
      <NavigationBar
        style={styles.navBar}
        titleColor='#fff'
        buttonsColor='white'
        statusBar={statusBar}
        title={{
          title: this.props.title || 'Workly',
          tintColor: '#fff'
        }}
        leftButton={(
          <View style={styles.backWrapper}>
            <TouchableWithoutFeedback onPress={Actions.home}>
              <Image source={{uri: backImage}} style={styles.back} />
            </TouchableWithoutFeedback>
           </View>
        )}
      />
    )
  }
}

export class NavBar extends Component {
  render() {
    return (
      <NavigationBar
        style={styles.navBar}
        titleColor='#fff'
        buttonsColor='white'
        statusBar={statusBar}
        title={{
          title: this.props.title || 'Workly',
          tintColor: '#fff'
        }}
      />
    )
  }
}

class NavBarLogoutComponent extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    openMenu: PropTypes.func.isRequired
  };

  render() {
    return (
      <NavigationBar
        style={styles.navBar}
        titleColor='#fff'
        buttonsColor='white'
        statusBar={statusBar}
        title={{
          title: this.props.title || 'Workly',
          tintColor: '#fff'
        }}
        rightButton={{
          title: 'Вихід',
          tintColor: '#fff',
          handler: () => this.props.dispatch(logoutUser())
        }}
        leftButton={(
          <View style={styles.backWrapper}>
            <TouchableWithoutFeedback onPress={() => this.props.openMenu(!this.props.open)}>
              <Image source={{uri: menuImage}} style={styles.menu} />
            </TouchableWithoutFeedback>
          </View>
        )} />
    )
  }
}

const mapStateToProps = ({menu}) => ({open: menu})
const mapDispatchToProps = dispatch => ({openMenu: isOpen => dispatch(updateMenu(isOpen))})

export let NavBarLogout = connect(mapStateToProps, mapDispatchToProps)(NavBarLogoutComponent)



class NavBarEditComponent extends Component {
  static propTypes = {
    student: PropTypes.object,
    company: PropTypes.object
  };
  
  render() {
    return (
      <NavigationBar
        style={styles.navBar}
        titleColor='#fff'
        buttonsColor='white'
        statusBar={statusBar}
        title={{
          title: this.props.title || 'Workly',
          tintColor: '#fff'
        }}
        rightButton={{
          title: 'Edit',
          tintColor: '#fff',
          handler: () => this.props.company ? Actions.editCompany() : Actions.editStudent()
        }}
        leftButton={(
          <View style={styles.backWrapper}>
            <TouchableWithoutFeedback onPress={this.props.onPrev || Actions.pop}>
              <Image source={{uri: backImage}} style={styles.back} />
            </TouchableWithoutFeedback>
           </View>
        )} />
    )
  }
}


export let NavBarEdit = connect(({user}) => user)(NavBarEditComponent)
