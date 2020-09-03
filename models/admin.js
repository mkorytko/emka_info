const knex = require("./knex");
const bcrypt = require("bcrypt")
const { Model } = require('objection');
require("dotenv").config();

Model.knex(knex);

class Admin extends Model {
    static tableName = 'usersadmin';

    static jsonSchema = {
        type: 'object',
        required: ['name'],

        properties: {
            id: {type: 'integer'},
            name: {type: 'string',default: ''},
            password: {type: 'string'},
            created_at: {},
        }
    };

    verifyPassword (password, callback) {
        const result = password + process.env.KEY;
        const match = bcrypt.compareSync(result, this.password);
        callback(match);
    };
}

module.exports = Admin;
