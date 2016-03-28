import request from '../tools/request'

class ClientApi {
  constructor() {
    this.url = 'http://workly.herokuapp.com/api'
  }

  fetchVacancies() {
    return request({url: `${this.url}/vacancy`})
  }

  fetchStudent() {
    return request({url: `${this.url}/student-status`})
  }

  loginStudent(body) {
    return request({
      url: `${this.url}/student-login`,
      method: 'post',
      body
    })
  }

  signupStudent(body) {
    return request({
      url: `${this.url}/student`,
      method: 'post',
      body
    })
  }

  logout() {
    return request({url: `${this.url}/logout`})
  }
}

export default new ClientApi()