import request from '../tools/request'

class ClientApi {
  static request = request;

  constructor() {
    this.url = 'https://workly.herokuapp.com/api'
  }

  fetchVacancies() {
    return ClientApi.request({url: `${this.url}/vacancy`})
  }

  fetchCompanies() {
    return ClientApi.request({url: `${this.url}/company`})
  }

  fetchStudents() {
    return ClientApi.request({url: `${this.url}/student`})
  }

  fetchUser() {
    return ClientApi.request({url: `${this.url}/status`})
  }

  getRoadMap(id) {
    return ClientApi.request({url: `${this.url}/student-road-map?id=${id}`})
  }

  loginUser(body) {
    return ClientApi.request({
      url: `${this.url}/login`,
      method: 'post',
      body
    })
  }

  signupStudent(body) {
    return ClientApi.request({
      url: `${this.url}/student`,
      method: 'post',
      body
    })
  }

  signupCompany(body) {
    return ClientApi.request({
      url: `${this.url}/company`,
      method: 'post',
      body
    })
  }

  logout() {
    return ClientApi.request({url: `${this.url}/logout`})
  }

  fetchCompany(id) {
    return ClientApi.request({url: `${this.url}/company/${id}`})
  }

  fetchStudent(id) {
    return ClientApi.request({url: `${this.url}/student/${id}`})
  }

  searchVacancy(body) {
    return ClientApi.request({
      url: `${this.url}/vacancy-search`,
      method: 'post',
      body
    })
  }

  fetchCompetence(value) {
    return ClientApi.request({url: `${this.url}/competence?value=${value}`})
  }
  
  createVacancy(body) {
    return ClientApi.request({
      url: `${this.url}/vacancy-add`,
      method: 'post',
      body
    })
  }

  updateVacancy(id, body) {
    return ClientApi.request({
      url: `${this.url}/vacancy-update/${id}`,
      method: 'put',
      body
    })
  }

  removeVacancy(id) {
    return ClientApi.request({
      url: `${this.url}/vacancy/${id}`,
      method: 'delete'
    })
  }

  subscribeVacancy(id, body) {
    return ClientApi.request({
      url: `${this.url}/vacancy-subscribe/${id}`,
      method: 'post',
      body
    })
  }

  updateCompany(id, body) {
    return ClientApi.request({
      url: `${this.url}/company-update/${id}`,
      method: 'put',
      body
    })
  }

  updateStudent(id, body) {
    return ClientApi.request({
      url: `${this.url}/student-update/${id}`,
      method: 'put',
      body
    })
  }
}

export default new ClientApi()
