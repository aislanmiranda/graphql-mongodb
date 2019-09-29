const UsuarioSchema = require("./../models/usuario");

module.exports = {
    
  hello: (parent, args) => {
    return `hello world ${args.name}`;
  },

  allUsers: (parent, args) => {

    return UsuarioSchema
      .find();
  }

}