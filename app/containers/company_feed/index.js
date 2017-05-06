import React, {Component, PropTypes} from 'react'
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from '../../react-native-redux-router'
import {setCompany} from '../../actions/company'
import {fetchCompanies, updateCount, setSearch} from '../../actions/companies'
import Error from '../../components/error'
import Loading from '../../components/loading'
import SideBar from '../../components/side_bar'
import AuthInput from '../../components/auth_input'
import More from '../../components/more'
import CompanyItem from '../../components/company_item'
import short from '../../tools/short'
import check from '../../tools/check'
import styles from '../feed/feed.styles'

class CompanyFeed extends Component {

  static propTypes = {
    fetchCompanies: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    updateCount: PropTypes.func.isRequired,
    setCompany: PropTypes.func.isRequired
  }

  componentWillMount() {
    (!this.props.data || !this.props.data.length) && this.props.fetchCompanies()
  }

  setCurrent(company) {
    this.props.setCompany(company)
    Actions.company({title: short(company.name.name, 30)})
  }

  searchCompany(company) {
    return this.props.search
      .toLowerCase()
      .split(' ')
      .some(search =>
        check(company.name.name, search)
        || (company.city && check(company.city.name, search))
      )
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            !this.props.error &&
            this.props.data.length > 0 &&
            <AuthInput
              placeholder='Пошук компаній'
              maxLength={200}
              style={styles.input}
              onChangeText={this.props.setSearch}
              value={this.props.search}
            />
          }
          {
            this.props.search.length > 0 &&
            <Text style={styles.remove} onPress={this.props.setSearch}>✕</Text>
          }
          {
            !this.props.error &&
            this.props.data.length > 0 &&
            this.props.data
              .filter(company => this.searchCompany(company))
              .filter((_, index) => index < this.props.count)
              .map(company => <CompanyItem onPress={() => this.setCurrent(company)} company={company} key={company._id} />)
          }
          {this.props.error && <Error />}
          {
            !this.props.error && (this.props.data && this.props.data.length == 0) && 
            <Error text='Немає зареєстрованих компаній' />
          }
          {
            !this.props.error &&
            this.props.data.filter(company => this.searchCompany(company)).length > this.props.count && 
            <More updateCount={this.props.updateCount} />
          }
        </ScrollView>
      </SideBar>
    )
  }

  render() {
    return this.props.loading ? <Loading /> : this.content()
  }
}

const mapStateToProps = ({companies}) => companies
const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  updateCount: () => dispatch(updateCount),
  setCompany: data => dispatch(setCompany(data)),
  setSearch: data => dispatch(setSearch(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyFeed)
