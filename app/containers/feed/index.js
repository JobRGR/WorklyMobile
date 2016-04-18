import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import Spinner from 'react-native-spinkit'
import {Actions} from 'react-native-redux-router'
import {fetchVacancies, updateCount, setCurrent} from '../../actions/vacancies'
import SideBar from '../../components/side_bar'
import VacancyItem from '../../components/vacancy_item'
import short from '../../tools/short'
import {green as color} from '../../components/base/color'
import styles from './feed.styles'

class Feed extends Component {

  static propTypes = {
    fetchVacancies: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
  }

  componentWillMount() {
    (!this.props.data || !this.props.data.length) && this.props.fetchVacancies()
  }

  setCurrent(vacancy) {
    this.props.setCurrent(vacancy._id)
    Actions.vacancy({title: short(vacancy.name, 30)})
  }

  more() {
    return (
      <TouchableHighlight underlayColor='white' onPress={this.props.updateCount}>
        <Text style={styles.more}>Більше</Text>
      </TouchableHighlight>
    )
  }

  loading() {
    return (
      <View style={styles.spinner}>
        <Spinner size={70} type='ThreeBounce' isVisible={true} color={color}/>
      </View>
    )
  }

  error() {
    return (
      <SideBar>
        <View style={styles.spinner}>
          <Text style={styles.error}>Просимо пробачення за тимчасові проблеми</Text>
          <Text style={styles.error}>Спробуйте пізніше ;(</Text>
        </View>
      </SideBar>
    )
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            this.props.data.length > 0 &&
            this.props.data
              .filter((_, index) => index < this.props.count)
              .map(vacancy => <VacancyItem onPress={() => this.setCurrent(vacancy)} vacancy={vacancy} key={vacancy._id} />)
          }
          {this.props.error && this.error()}
          {this.props.data.length > 0 && this.more()}
        </ScrollView>
      </SideBar>
    )
  }

  render() {
    return this.props.loading ? this.loading() : this.content()
  }
}

const mapStateToProps = ({vacancies}) => ({...vacancies})
const mapDispatchToProps = dispatch => ({
  fetchVacancies: () => dispatch(fetchVacancies()),
  updateCount: () => dispatch(updateCount),
  setCurrent: data => dispatch(setCurrent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
