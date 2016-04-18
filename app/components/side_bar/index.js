import SideMenu from 'react-native-side-menu'
import React, {Component, PropTypes} from 'react-native'
import {connect} from 'react-redux'
import {updateMenu} from '../../actions/menu'
import Menu from '../menu'

class SideBar extends  Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    updateMenu: PropTypes.func.isRequired
  };

  render() {
    return (
      <SideMenu
        menu={<Menu />}
        isOpen={this.props.open}
        onChange={this.props.updateMenu}
      >
        {this.props.children}
      </SideMenu>
    )

  }
}

const mapStateToProps = ({menu}) => ({open: menu})
const mapDispatchToProps = dispatch => ({updateMenu: isOpen => dispatch(updateMenu(isOpen))})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)