import React, {Component, View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import {Router, Route, Schema, Animations} from 'react-native-redux-router'
import {green as color} from './components/base/color'
import {NavBar, NavBarBack, NavBarLogout, NavBarAuth, NavBarEdit} from './components/nav_bar'
import Home from './containers/home'
import Start from './containers/start'
import SignUp from './containers/signup'
import Login from './containers/login'
import Feed from './containers/feed'
import CompanyFeed from './containers/company_feed'
import StudentFeed from './containers/student_feed'
import Vacancy from './containers/vacancy'
import Student from './containers/student'
import Competence from './containers/competence'
import CreateVacancy from './containers/create_vacancy'
import EditVacancy from './containers/edit_vacancy'
import Company from './containers/company'
import EditCompany from './containers/edit_company'
import CompanyVacancies from './containers/company_vacancies'
import EditStudent from './containers/edit_student'
import VacancyResult from './containers/vacancy_result'


class Routes extends Component {

  render(){
    const style = {flex: 1}
    return (
      <View style={style}>
        <StatusBar
          backgroundColor={color}
          barStyle='light-content'
        />
        <Router>
          <Schema name='auth' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarAuth} />
          <Schema name='back' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarBack} />
          <Schema name='user' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarEdit} />
          <Schema name='default' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar} />
          <Schema name='logout' sceneConfig={Animations.FlatFloatFromRight} navBar={NavBarLogout} dispatch={this.props.dispatch} />

          <Route name='start' initial={true} component={Start} title='Workly' />
          <Route name='home' component={Home} title='Workly' />
          <Route name='signup' component={SignUp} title='SignUp' schema='auth' title='Реєстрація' />
          <Route name='login' component={Login} title='Login' schema='auth'  title='Вхід' />

          <Route name='feed' component={Feed} title='Вакансії' schema='logout' />
          <Route name='companyFeed' component={CompanyFeed} schema='logout' />
          <Route name='studentFeed' component={StudentFeed} schema='logout' />

          <Route name='vacancy' component={Vacancy} schema='back' />
          <Route name='student' component={Student} schema='back' />
          <Route name='company' component={Company} schema='back' />
          <Route name='competence' component={Competence} schema='back' />

          <Route name='createVacancy' component={CreateVacancy} title='Створити вакансію' schema='back' />
          <Route name='editVacancy' component={EditVacancy} title='Редагувати вакснію' schema='back' />
          <Route name='companyVacancies' component={CompanyVacancies} title='Мої вакансії' schema='logout' />

          <Route name='userStudent' component={Student} schema='user' />
          <Route name='userCompany' component={Company} schema='user' />

          <Route name='editCompany' component={EditCompany} schema='back' />
          <Route name='editStudent' component={EditStudent} schema='back' />

          <Route name='vacancyResult' component={VacancyResult} schema='back' />

        </Router>
      </View>
    )
  }
}


export default connect()(Routes)
