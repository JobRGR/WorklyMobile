import request from '../tools/request'

class ClientApi {
  static request = request;

  constructor() {
    this.url = 'http://workly.herokuapp.com/api'
  }

  fetchVacancies() {
    return ClientApi.request({url: `${this.url}/vacancy`})
  }

  fetchUser() {
    return ClientApi.request({url: `${this.url}/status`})
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
}

export default new ClientApi()
