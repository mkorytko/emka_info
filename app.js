require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const history = require("connect-history-api-fallback")


const app = express();

app.use(express.static("public_html"));
app.use(express.static("public"));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("./public_html/index.html"));
});

const server = http.Server(app);
server.listen(process.env.PORT, () => console.log(`Listen on ${process.env.PORT}`));
