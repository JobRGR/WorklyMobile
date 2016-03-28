import React, {Component, Text, View, Image} from 'react-native'
import styles from './vacancy_item.styles'

class VacancyItem extends Component {

  short(text, length) {
    return `${text.split(' ').splice(0, length).join(' ')}...`
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.vacancy.company.avatar}} style={styles.image} />
        <Text style={styles.title}>{this.short(this.props.vacancy.name, 5)}</Text>
        <Text style={styles.sub}>{this.props.vacancy.city.name}</Text>
        <Text style={styles.sub}>{this.props.vacancy.company.name.name}</Text>
        <Text style={styles.text}>{this.short(this.props.vacancy.about, 20)}</Text>
      </View>
    )
  }
}

export default VacancyItem
