import React, {Component, PropTypes} from 'react'
import {Text, ScrollView, View} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from '../../react-native-redux-router'
import Browser from 'react-native-browser'
import short from '../../tools/short'
import {setCurrent} from '../../actions/vacancies'
import Back from '../../components/back'
import Error from '../../components/error'
import Avatar from '../../components/avatar'
import Loading from '../../components/loading'
import formatDate from '../../tools/format_date'
import styles from './company.styles'

class Company extends Component {

  static propTypes = {
    startFetch: PropTypes.bool.isRequired,
    errorFetch: PropTypes.bool.isRequired,
    data: PropTypes.object,
    startFetchVacancy: PropTypes.bool.isRequired,
    errorFetchVacancy: PropTypes.bool.isRequired,
    vacancies: PropTypes.array,
    setCurrent: PropTypes.func.isRequired
  };

  toVacancy(id, title) {
    this.props.setCurrent(id)
    Actions.vacancy({title: short(title, 30)})
  }

  openInBrowser() {
    Browser.open(this.props.data.site, {
      showUrlWhileLoading: true,
      navigationButtonsHidden: false,
      showActionButton: true,
      showDoneButton: true,
      doneButtonTitle: 'Done',
      showPageTitles: true,
      disableContextualPopupMenu: false,
      hideWebViewBoundaries: false
    })
  }

  company() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar company={this.props.data} />
          <View>
            <Text style={styles.title}>{short(this.props.data.name.name, 30)}</Text>
          </View>
        </View>
        <View style={(this.props.data.email || this.props.data.site || this.props.data.city) && styles.info}>
          {this.props.data.email && <Text style={styles.text}>Email: <Text style={styles.sub}>{this.props.data.email}</Text></Text>}
          {this.props.data.site && <Text style={styles.text}>Веб-сайт: <Text onPress={() => this.openInBrowser()} style={styles.sub}>{this.props.data.site}</Text></Text>}
          {this.props.data.city && <Text style={styles.text}>Місто:  <Text style={styles.text}>{this.props.data.city.name}</Text></Text>}
        </View>
        {this.props.data.about && <Text style={[styles.about, styles.text]}>{this.props.data.about}</Text>}
        {this.props.startFetchVacancy && <Loading />}
        {this.props.vacancies && this.vacancies()}
        {this.props.errorFetchVacancy && this.noVacancy()}
      </ScrollView>
    )
  }

  vacancies() {
    return (
      <View style={styles.vacanciesWrapper}>
        {
          this.props.vacancies.length
          ? <Text style={styles.vacanciesWrapperTitle}>Вакансії у {this.props.data.name.name}</Text>
          : this.noVacancy()
        }
        {
          this.props.vacancies.map(({name, _id, city, createdAt}) => (
            <View key={_id} style={styles.vacancy}>
              <Text style={styles.sub} onPress={() => this.toVacancy(_id, name)}>{short(name, 50)}</Text>
              <View style={[styles.row, styles.vacancyWrapper]}>
                <Text>{city.name}</Text>
                <Text> | </Text>
                <Text>{formatDate(createdAt)}</Text>
              </View>
            </View>
          ))
        }
      </View>
    )
  }

  noVacancy() {
    return <Text style={[styles.vacanciesWrapperTitle, styles.center]}>У {this.props.data.name.name} нeмає вакансій</Text>
  }

  content() {
    if (this.props.errorFetch) return <Error />
    if (this.props.startFetch) return <Loading />
    return this.company()
  }

  render() {
    return (
      <Back>
        {this.content()}
      </Back>
    )
  }
}

const mapStateToProps = ({company}) => company
const mapDispatchToProps = dispatch => ({setCurrent: id => dispatch(setCurrent(id))})

export default connect(mapStateToProps, mapDispatchToProps)(Company)
