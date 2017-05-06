import React, {Component, PropTypes} from 'react'
import {ScrollView, PanResponder} from 'react-native'
import {Actions} from '../../react-native-redux-router'

class Back extends Component {
  componentWillMount() {
    this.back = false
    this.setData()
    this.responder = PanResponder.create({
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(this)
    })
    this.interval = setInterval(() => this.setData(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setData() {
    this.xCord = null
    this.distanse = 0
  }

  handleMoveShouldSetPanResponder(event, gestureState) {
    if (this.back) {
      return
    }
    const xCord = Math.round(gestureState.dx)
    if (!this.xCord) {
      this.xCord = xCord
    }
    this.distanse = xCord - this.xCord
    if (this.distanse > 50) {
      this.distanse =- Infinity
      this.back = true
      Actions.pop()
    }
  }

  render() {
    return (
      <ScrollView {...this.responder.panHandlers}>
        {this.props.children}
      </ScrollView>
    )
  }
}

export default Back
