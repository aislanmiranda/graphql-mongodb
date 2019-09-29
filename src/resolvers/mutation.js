// const { authorizeWithGithub } = require('../lib')
// const fetch = require('node-fetch')
// const { ObjectID } = require('mongodb')
// const { uploadStream } = require('../lib')
// const path = require('path')
const UsuarioSchema = require("./../models/usuario");

module.exports = {

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