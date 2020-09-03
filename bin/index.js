require("dotenv").config();
const env = process.env;

const mysql = require('mysql');
const db = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PAS,
    database: env.DB_NAME,
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL connected...");
});

require("../models/knex");

require("../app");
