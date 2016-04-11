import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import styles from './vacancy.styles'

class Vacancy extends Component {

  static propTypes = {
    vacancy: PropTypes.object.isRequired
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Image source={{uri: `${this.props.vacancy.company.avatar}?${Math.random()}`}} style={styles.image} />
          <View>
            <Text style={styles.title}>{this.props.vacancy.name}</Text>
            <View style={[styles.row, styles.subRow]}>
              <Text style={styles.sub}>{this.props.vacancy.company.name.name}</Text>
              <Text style={styles.text}> | </Text>
              <Text style={styles.text}>{this.props.vacancy.city.name}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.text}>{this.props.vacancy.about}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({vacancies}) => ({vacancy: vacancies.current})

export default connect(mapStateToProps)(Vacancy)
