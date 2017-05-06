import React, {Component, PropTypes} from 'react'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import short from '../../tools/short'
import Avatar from '../avatar'
import styles from '../vacancy_item/vacancy_item.styles'

class CompanyItem extends Component {

  render() {
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Avatar company={this.props.company} />
            <View>
              <Text style={styles.title}>{short(this.props.company.name.name, 30)}</Text>
              <View style={[styles.row, styles.subRow]}>
                {
                  this.props.company.city
                  ? <Text style={styles.sub}>{this.props.company.city.name}</Text>
                  : <Text style={styles.sub}>{short(this.props.company.email, 40)}</Text>
                }
              </View>
            </View>
          </View>
          {this.props.company.about && <Text style={styles.text}>{short(this.props.company.about, 100)}</Text>}
        </View>
      </TouchableHighlight>
    )
  }
}

export default CompanyItem
