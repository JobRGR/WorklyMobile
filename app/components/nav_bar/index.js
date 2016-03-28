import React, {Component} from 'react-native'
import NavigationBar from 'react-native-navbar'
import {logoutStudent} from '../../actions/student'
import {Actions} from 'react-native-redux-router'
import styles, {color} from './nav_bar.styles'


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
        rightButton={{
          title: 'Back',
          tintColor: '#fff',
          handler: this.props.onPrev || Actions.pop
        }} />
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

export class NavBarLogout extends Component {
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
          handler: () => this.props.dispatch(logoutStudent())
        }} />
    )
  }
}
