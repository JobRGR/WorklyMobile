import React, {Component, Text, View, Image} from 'react-native'
import styles from './vacancy_item.styles'

class VacancyItem extends Component {

  short(text, length) {
    let str = text.split('').splice(0, length).join('')
    const lastIndex = str.lastIndexOf(' ')
    const res = str.substring(0, lastIndex)
    return `${res} ${res[res.length - 1] != '.' ? '...' : ''}`
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={{uri: this.props.vacancy.company.avatar}} style={styles.image} />
          <View>
            <Text style={styles.title}>{this.short(this.props.vacancy.name, 30)}</Text>
            <View style={[styles.row, styles.subRow]}>
              <Text style={styles.sub}>{this.props.vacancy.company.name.name}</Text>
              <Text style={styles.text}> | </Text>
              <Text style={styles.text}>{this.props.vacancy.city.name}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.text}>{this.short(this.props.vacancy.about, 150)}</Text>
      </View>
    )
  }
}

export default VacancyItem
