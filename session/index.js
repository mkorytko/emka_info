const session = require("express-session");
const MySqlStore = require("express-mysql-session")(session);
const env = process.env;

const DEV_MODE = env.NODE_ENV === "production";

const sessionInit = session({
    secret: "321654987asd",
    secure: DEV_MODE,
    resave: false,
    key: 'session_cookie_name',
    saveUninitialized: false,
    store: new MySqlStore({
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PAS,
        database: env.DB_NAME,
    }),
    cookie: {
        path: '/',
        httpOnly: true, // cookie не доступны JS
        maxAge: 60 * 60 * 1000, // время жизни сессии
    }
});

module.exports = sessionInit;
