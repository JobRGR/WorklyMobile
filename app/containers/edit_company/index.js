import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import short from '../../tools/short'
import Avatar from '../../components/avatar'
import styles from '../company/company.styles'

class EditCompany extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Avatar company={this.props.company} />
          <View>
            <Text style={styles.title}>{short(this.props.company.name.name, 30)}</Text>
          </View>
        </View>
        <View style={(this.props.company.email || this.props.company.site || this.props.company.city) && styles.info}>
          {this.props.company.email && <Text style={styles.text}>Email: <Text style={styles.sub}>{this.props.company.email}</Text></Text>}
          {this.props.company.site && <Text style={styles.text}>Веб-сайт: <Text style={styles.sub}>{this.props.company.site}</Text></Text>}
          {this.props.company.city && <Text style={styles.text}>Місто:  <Text style={styles.text}>{this.props.company.city.name}</Text></Text>}
        </View>
        {this.props.company.about && <Text style={[styles.about, styles.text]}>{this.props.company.about}</Text>}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({user}) => ({company: user.company})

export default connect(mapStateToProps)(EditCompany)
