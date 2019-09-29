
const UsuarioSchema = require("./../models/usuario");


module.exports = {
    
  hello: (parent, args) => {
    return `hello world ${args.name}`;
  },
  
  // totalUsers: (parent, args, { db }) =>
  //   db.collection('users')
  //     .estimatedDocumentCount(),

  allUsers: (parent, args, { db }) => {

    return UsuarioSchema
      .find();
  }

    // user: (parent, args, { db }) => 
    //   db.collection('users')
    //     .findOne({ login: args.login })    

}