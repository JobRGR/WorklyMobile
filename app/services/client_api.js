import request from '../tools/request'

class ClientApi {
  constructor() {
    this.url = 'http://workly.herokuapp.com/api'
  }

  fetchVacancies() {
    return request({url: `${this.url}/vacancy`})
  }

  fetchUser() {
    return request({url: `${this.url}/status`})
  }

  loginUser(body) {
    return request({
      url: `${this.url}/login`,
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
