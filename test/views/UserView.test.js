const { createUser } = require('./../../app/views/UserView');
const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
  test("1.- Return an error object when try to create a new user with an null payload", () => {
    const payload = null;
    const result = UserView.createUser(payload) // https://jestjs.io/docs/using-matchers#strings    const result = UserView.createUser(payload)  // 

    expect(result.error).toMatch(/payload no existe/)
  })

  test('2.- Return an error object when try to create a new user with payload with invalid properties', () => {
    const payload = {username: null, name: 12, id: "id" }
    const result = UserView.createUser(payload);
    
    expect(result.error).toMatch(/Valores válidos son requeridos/)
  })

  // test('3.- Return an error object when try to create a new user with a payload with missing properties', () => {
  //   const payload = { username: 'Username', name: '12', id: 3 }
  //   const result = UserView.createUser(payload);

  //   expect(result.error).toMatch(/Valores necesarios/)
  // })
})