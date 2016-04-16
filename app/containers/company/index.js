import React, {
  Component,
  PropTypes,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import Spinner from 'react-native-spinkit'
import short from '../../tools/short'
import {green as color} from '../../components/base/color'
import styles from './company.styles'

class Company extends Component {

  static propTypes = {
    startFetch: PropTypes.bool.isRequired,
    errorFetch: PropTypes.bool.isRequired,
    data: PropTypes.object
  };

  company() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Image source={{uri: `${this.props.data.avatar}?${Math.random()}`}} style={styles.image} />
          <View>
            <Text style={styles.title}>{short(this.props.data.name.name, 30)}</Text>
          </View>
        </View>
        <View style={(this.props.data.email || this.props.data.site || this.props.data.city) && styles.info}>
          {this.props.data.email && <Text style={styles.text}>Email: <Text style={styles.sub}>{this.props.data.email}</Text></Text>}
          {this.props.data.site && <Text style={styles.text}>Веб-сайт: <Text style={styles.sub}>{this.props.data.site}</Text></Text>}
          {this.props.data.city && <Text style={styles.text}>Місто:  <Text style={styles.text}>{this.props.data.city.name}</Text></Text>}
        </View>
        <Text style={[styles.about, styles.text]}>{this.props.data.about}</Text>
      </ScrollView>
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
      <View style={styles.spinner}>
        <Text style={styles.error}>Просимо пробачення за тимчасові проблеми</Text>
        <Text style={styles.error}>Спробуйте пізніше ;(</Text>
      </View>
    )
  }

  render() {
    if (this.props.errorFetch) return this.error()
    if (this.props.startFetch) return this.loading()
    return this.company()
  }
}

const mapStateToProps = ({company}) => company

export default connect(mapStateToProps)(Company)
