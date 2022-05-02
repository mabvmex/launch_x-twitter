const UserService = require('./../services/UserServices');

class UserView {

  static createUser(payload) {
    if (payload === null) {
      return { error: 'Error por contenido NULL en el payload' };
    } else if (
      typeof payload.username != "string" || payload.name != "string" || payload.id != "id" 
    ) {
      return { error: 'Error por valores no válidos'}
    }
    
  }
}

module.exports = UserView;