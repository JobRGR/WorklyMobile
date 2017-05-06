import React, {Component, PropTypes} from 'react'
import Drawer from 'react-native-drawer'
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
      <Drawer
        content={<Menu />}
        open={this.props.open}
        tapToClose={true}
        openDrawerOffset={0.3}
        panCloseMask={0.3}
        closedDrawerOffset={-10}
      >
        {this.props.children}
      </Drawer>
    )

  }
}

const mapStateToProps = ({menu}) => ({open: menu})
const mapDispatchToProps = dispatch => ({updateMenu: isOpen => dispatch(updateMenu(isOpen))})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)