const { toHash } = require("../db/hash");
const hashPwd = toHash("M@xf0ker");

exports.seed = function(knex) {
  return knex('usersadmin').del()
    .then(function () {
      return knex('usersadmin').insert([
        {
            id: 1,
            name: 'MaksAndreevichAdmin',
            password: hashPwd,
            created_at: new Date().toString(),
        },
      ]);
    });
};
