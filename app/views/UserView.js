const UserService = require("./../services/UserServices");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return { error: "/payload no existe/" };
    }

    if (typeof payload.username !== "string") {
      if (typeof payload.name !== "string") {
        if (typeof payload.id !== "number") {
          return { error: "Valores válidos son requeridos" };
        }
      }
    }

    if (!payload.username || !payload.name || !payload.id) {
      return { error: "Valores necesarios" };
    }
    
    return {username: 'username', name: 'name', id: 1 }
  } 
  


}

module.exports = UserView;
