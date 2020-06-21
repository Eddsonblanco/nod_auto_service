'use strict'
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

class init {
  constructor() {
    this.connectMongo = null
    this.username = process.env.ADMIN_USERNAME
    this.password = process.env.ADMIN_PASSWORD
    this.first_name = process.env.ADMIN_FIRST_NAME
    this.last_name = process.env.ADMIN_LAST_NAME
    this.email = process.env.ADMIN_EMAIL
    this.newUser()
  }
  connectDataBase() {
    try {
      // eslint-disable-next-line no-restricted-syntax
      console.log('connect Data Base')
      this.connectMongo = mongoose.createConnection(process.env.MONGODB_URL, {
        useFindAndModify  : false,
        useNewUrlParser   : true,
        useUnifiedTopology: true
      })
    } catch ({ err }) {
      // eslint-disable-next-line no-restricted-syntax
      console.log('Xavi: err', err)
    }
  }
  createUser()  {
    const userShema = new mongoose.Schema({
      email: {
        required: true,
        type    : String
      },
      first_name : String,
      last_name  : String,
      login_count: Number,
      password   : {
        required: true,
        type    : String
      },
      username: {
        required: true,
        type    : String
      }
    })

    const User = this.connectMongo.model('User', userShema)
    User.findOne({ username: this.username })
      .then(data => { // si la consulta se ejecuta
        if(data) { // si el usuario existe
          throw 'user already exists'
        }
        else { // si no existe el usuario se crea/registra
          // eslint-disable-next-line no-restricted-syntax
          console.log('creando usuario')
          var hash = bcrypt.hashSync(this.password, parseInt(process.env.BCRYPT_ROUNDS))
          let document = new User({
            email      : this.email,
            first_name : this.first_name,
            last_name  : this.last_name,
            login_count: 0,
            password   : hash,
            username   : this.username
          })

          return document.save()
        }
      })
      .then(() => { // usuario registrado con exito, pasamos al siguiente manejador
        // eslint-disable-next-line no-restricted-syntax
        console.log('User created')
        process.exit(1)
      })
      .catch(() => { // error en registro, lo pasamos al manejador de errores
        // eslint-disable-next-line no-restricted-syntax
        console.log('User exist')
        process.exit(1)
      })
  }
  newUser() {
    if(!this.connectMongo)
      this.connectDataBase()
    this.createUser()
  }
}

new init()
