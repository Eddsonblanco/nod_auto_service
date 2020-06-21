
import passport from 'passport'
import passportLocal from 'passport-local'
import passportJwt from 'passport-jwt'
import bcrypt from 'bcrypt'
import User from './models/user'

const LocalStrategy = passportLocal.Strategy
const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy

passport.use(new LocalStrategy({
  passwordField: 'password',
  session      : false,
  usernameField: 'username'
}, (username, password, done) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log('ejecutando *callback verify* de estategia local')
  User.findOne({ username: username })
    .then(data => {
      if(data === null) return done(null, false) // el usuario no existe
      else if(!bcrypt.compareSync(password, data.password))  return done(null, false)  // no coincide la password

      return done(null, data) // login ok
    })
    .catch(err => done(err, null)) // error en DB
}))

/** config de estrategia jwt de passport ******/
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET
opts.algorithms = [ process.env.JWT_ALGORITHM ]

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log('ejecutando *callback verify* de estategia jwt')
  User.findOne({ _id: jwt_payload.sub })
    .then(data => {
      if(data === null)  // no existe el usuario
        // podríamos registrar el usuario
        return done(null, false)

      /* encontramos el usuario así que procedemos a devolverlo para
      inyectarlo en req.user de la petición en curso*/
      else
        return done(null, data)
    })
    .catch(err => done(err, null)) // si hay un error lo devolvemos
}))

export default passport
