import React, {Component, Image, View, TouchableWithoutFeedback} from 'react-native'
import NavigationBar from 'react-native-navbar'
import {logoutUser} from '../../actions/user'
import {Actions} from 'react-native-redux-router'
import styles from './nav_bar.styles'
import uri from './back.image'
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
              <Image source={{uri}} style={styles.back} />
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
              <Image source={{uri}} style={styles.back} />
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
          handler: () => this.props.dispatch(logoutUser())
        }} />
    )
  }
}
