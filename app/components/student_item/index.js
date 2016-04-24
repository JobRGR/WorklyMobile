import React, {Component, Text, View, Image, TouchableHighlight} from 'react-native'
import short from '../../tools/short'
import Avatar from '../avatar'
import styles from './student.styles'

class CompanyItem extends Component {

  getPosition() {
    const {experiences} = this.props.student
    if (!experiences || !Array.isArray(experiences) || !experiences.length) {
      return null
    }
    const {position} = experiences[experiences.length - 1]
    return !position || !position.name ? null : position.name
  }


  render() {
    const position = this.getPosition()
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Avatar student={this.props.student} />
            <View>
              <Text style={styles.title}>{short(this.props.student.name, 30)}</Text>
              <View style={[styles.row, styles.subRow]}>
                {position && <Text style={styles.sub}>{short(position, 20)}</Text>}
                {this.props.student.city && position && <Text style={styles.text}> | </Text>}
                {this.props.student.city && <Text style={styles.text}>{this.props.student.city.name}</Text>}
                {!(this.props.student.city || position) && <Text style={styles.sub}>{short(this.props.student.email, 40)}</Text>}
              </View>
            </View>
          </View>
          {this.props.student.about && <Text style={styles.text}>{short(this.props.student.about, 100)}</Text>}
        </View>
      </TouchableHighlight>
    )
  }
}

export default CompanyItem
