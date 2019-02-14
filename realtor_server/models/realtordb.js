
const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);
module.exports = {
    createUser(user) {
        console.log(user);
        return db.one(`INSERT INTO users(user_name, password) 
        VALUES ($1, $2) RETURNING *`, [user.username, user.password, 0]);
      }
}

