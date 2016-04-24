import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import Skills from '../../components/skills'
import short from '../../tools/short'
import {fetchCompany} from '../../actions/company'
import Avatar from '../../components/avatar'
import styles from '../company/company.styles'

class Vacancy extends Component {

  static propTypes = {
    vacancy: PropTypes.object.isRequired,
    fetchCompany: PropTypes.func.isRequired
  };

  render() {
    let {name, _id: id} = this.props.vacancy.company
    let {name: companyName} = name
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar company={this.props.vacancy.company} />
          <View>
            <Text style={styles.title}>{short(this.props.vacancy.name, 30)}</Text>
            <View style={[styles.row, styles.subRow]}>
              <Text style={styles.sub} onPress={() => this.props.fetchCompany(id, companyName)}>{companyName}</Text>
              {this.props.vacancy.city && <Text style={styles.text}> | </Text>}
              {this.props.vacancy.city && <Text style={styles.text}>{this.props.vacancy.city.name}</Text>}
            </View>
          </View>
        </View>
        <Text style={[styles.about, styles.text]}>{this.props.vacancy.about}</Text>
        {this.props.vacancy.skills && <Skills skills={this.props.vacancy.skills} />}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({vacancies}) => ({vacancy: vacancies.current})
const mapDispatchToProps =  dispatch => ({fetchCompany: (id, title) => dispatch(fetchCompany(id, title))})

export default connect(mapStateToProps, mapDispatchToProps)(Vacancy)
