const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: 'Falinka1603',
    database: 'authForm',
    user: 'postgres'
})
module.exports = { pool };