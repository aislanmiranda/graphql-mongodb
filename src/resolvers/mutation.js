const UsuarioSchema = require("./../models/usuario");

module.exports = {
  
  // pubsub = variável adicionada no contexto no apolloServer em src/index.js
  addUsers: async (root, args, { pubsub }) => {

    const user = {
      ...args.input
    }

    await UsuarioSchema.create(user);
    var newUsers = await UsuarioSchema
      .find();
      
    newUsers.forEach(newUser => pubsub.publish('user-added', {newUser}))
    
    return newUsers;
  }

}