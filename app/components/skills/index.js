import React, {Component, PropTypes, View, Text, TouchableWithoutFeedback} from 'react-native'
import {Actions} from 'react-native-redux-router'
import {connect} from 'react-redux'
import {fetchCompetence} from '../../actions/competence'
import capitalize from '../../tools/capitalize'
import short from '../../tools/short'
import styles from './skills.styles'

class Skills extends Component {

  static propTypes = {
    skills: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handlePress(value) {
    this.props.dispatch(fetchCompetence(value))
    Actions.competence({title: capitalize(short(value, 30))})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.skills.map(skill =>
          <TouchableWithoutFeedback key={skill._id} onPress={() => this.handlePress(skill.name)}>
            <View style={styles.label}>
              <Text style={styles.text}>{skill.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    )
  }
}

export default connect()(Skills)
