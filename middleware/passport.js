// eslint-disable-next-line no-undef
const Admin = require("../models/admin");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    { usernameField: "name", password: "pwd" },
    function(name, password, done) {
        Admin.query()
            .findOne({ name })
            .then((admin) => {
                if (!admin) {
                    return done(null, false);
                }
                admin.verifyPassword(password, (match) => {
                    if (!match) {
                        return done(null, false);
                    }
                    return done(null, admin);
                })
            }).catch((err) => {
                done(err);
            });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Admin.query()
        .findOne({ id })
        .then((user) => {
            done(null, user)
        }).catch((e) => {
            done(e)
        });
});

module.exports = passport;
