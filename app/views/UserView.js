const UserService = require('./../services/UserServices');

class UserView {

  static createUser(payload) {
    if (payload === null) {
      return { error: '/payload no existe/' };
    } else if (
      typeof payload.username != "string" || payload.name != "string" || payload.id != "id"
    ) {
      return { error: 'Valores válidos son requeridos'}
    } 
    
  }
}

module.exports = UserView;