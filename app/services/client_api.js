import request from '../tools/request'

class ClientApi {
  constructor() {
    this.url = 'http://workly.herokuapp.com/api'
  }

  fetchVacancies() {
    return request({url: `${this.url}/vacancy`})
  }
}

export default new ClientApi()