require("dotenv").config();
const env = process.env;

const express = require("express");
const app = express();

// const cookieParser = require("cookie-parser");
// const logger = require("morgan");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("./public_html"));
app.use("/assets", express.static("./public"));

// PATTERN
// const hbs = require("hbs");
// app.set("view engine", "hbs");

// SESSION
const session = require("./session");
app.use(session);

const passport = require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes");

app.use("/", routes);

const server = require("http").createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("disconnect", () => {
        console.log('Socket disconnected');
    })
});

server.listen(env.DB_PORT, () => console.log(`Listen ${env.DB_PORT}`));
