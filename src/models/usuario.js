const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    login: {
        type: String,
        require: true
    },
    nome: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('usuario', UsuarioSchema, 'usuario');