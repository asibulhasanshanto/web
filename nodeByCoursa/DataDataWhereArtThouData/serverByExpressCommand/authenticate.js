var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');
var config = require('./config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());//does things for session support.

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey,
        {expiresIn: 36000});
};

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts, 
    (jwt_payload, done) =>{
        //console.log("JWT payload: ", jwt_payload);
        User.findOne({_id:jwt_payload._id}, (err, user)=>{
            if(err) {
                return done(err,false);
            }
            else if(user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
    exports.varifyUser = passport.authenticate('jwt', {session: false});

    

// exports.verifyAdmin = ((req,res,next) =>{
//     const name = req.body.username
//     User.findOne({username: name},(err,user) => { 
//         if(err) {
//             next(err)
//         }
//         else if(!user) {
//             next(new Error("user not found"))
//         }
//         else {
//             if(!user.admin) {
//                 next(new Error("you are not an admin"))
//             }
//             else {
//                 next()
//             }
//         }                         
//     });
// });

exports.verifyAdmin = function(params, err, next) {
    if (params.user.admin){
      return next();
    } else {
      var err = new Error('Only administrators are authorized to perform this operation.');
      err.status = 403;
      return next(err);
    }
};