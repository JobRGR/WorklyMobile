import React, {Component, PropTypes} from 'react'
import {
  Text,
  ScrollView,
  View
} from 'react-native'
import {connect} from 'react-redux'
import {getRoadMap} from '../../actions/road_map'
import SideBar from '../../components/side_bar'
import Error from '../../components/error'
import Loading from '../../components/loading'
import Skills from '../../components/skills'
import Button from '../../components/button'
import styles from './road_map.styles'

class RoadMap extends Component {

  static propTypes = {
    data: PropTypes.array,
    id: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentWillMount() {
    !this.props.data && this.props.getRoadMap(this.props.id)
  }

  content() {
    return (
      <SideBar>
        <ScrollView style={styles.container}>
          {
            (this.props.data || []).map((roadMap, index) =>
              <View key={index} style={styles.row}>
                <Text style={styles.title}>Процент підходящих вакансій: {roadMap.avarageComparison.toFixed(2)}%</Text>
                <Skills skills={roadMap.skills} />
              </View>
            )
          }
          <View style={styles.wrapper}>
            <Button
              styles={styles.input}
              onPress={() => this.props.getRoadMap(this.props.id)}
              text='Перерозрахувати' />
          </View>
        </ScrollView>
      </SideBar>
    )
  }

  render() {
    if (this.props.error) {
      return  <Error />
    }
    else if (this.props.loading && !this.props.data) {
      return <Loading />
    }
    return this.content()
  }
}

const mapStateToProps = ({user, roadMap}) => ({
  ...roadMap,
  id: user.student._id,
  skills: user.student.skills.map(x => x.name)
})
const mapDispatchToProps = dispatch => ({
  getRoadMap: id => dispatch(getRoadMap(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RoadMap)
