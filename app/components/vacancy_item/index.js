import React, {Component, Text, View, Image, TouchableHighlight} from 'react-native'
import short from '../../tools/short'
import Avatar from '../avatar'
import styles from './vacancy_item.styles'

class VacancyItem extends Component {

  render() {
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Avatar company={this.props.vacancy.company} />
            <View>
              <Text style={styles.title}>{short(this.props.vacancy.name, 30)}</Text>
              <View style={[styles.row, styles.subRow]}>
                <Text style={styles.sub}>{this.props.vacancy.company.name.name}</Text>
                {this.props.vacancy.city && <Text style={styles.text}> | </Text>}
                {this.props.vacancy.city && <Text style={styles.text}>{this.props.vacancy.city.name}</Text>}
              </View>
            </View>
          </View>
          {this.props.vacancy.about && <Text style={styles.text}>{short(this.props.vacancy.about, 150)}</Text>}
        </View>
      </TouchableHighlight>
    )
  }
}

export default VacancyItem
