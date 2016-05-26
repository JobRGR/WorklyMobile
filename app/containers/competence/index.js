import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image,
  WebView
} from 'react-native'
import {connect} from 'react-redux'
import short from '../../tools/short'
import Error from '../../components/error'
import Avatar from '../../components/avatar'
import Loading from '../../components/loading'
import Back from '../../components/back'
import capitalize from '../../tools/capitalize'
import styles from '../company/company.styles'


class Competence extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    data: PropTypes.object
  };

  convertText(text) {
    return text
      .replace(/\s*\[.*?\]\s*/g, '')
      .replace(/]/g , '')
      .replace(/\[/g , '')
  }

  competence() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar student={{
            avatar: this.props.data.image,
            name: this.props.data.title
           }} />
          <View>
            <Text style={styles.title}>{capitalize(short(this.props.data.title, 30))}</Text>
          </View>
          <View>
            {this.props.data.text &&
              <Text style={[styles.text, styles.contentWidth]}>
                {short(this.convertText(this.props.data.text), 10000)}
              </Text>
            }
          </View>
        </View>
      </ScrollView>
    )
  }

  content() {
    if (this.props.error) return <Error />
    if (this.props.loading) return <Loading />
    return this.competence()
  }

  render() {
    return (
      <Back>
        {this.content()}
      </Back>
    )
  }
}

const mapStateToProps = ({competence}) => competence

export default connect(mapStateToProps)(Competence)
