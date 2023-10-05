const { pool } = require('../db');

async function getAllUsersDB() {
    const client = await pool.connect();
    const sql = 'select * from users';
    const result = (await client.query(sql)).rows
    return result;
}
async function createUserDB(name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'insert into users (name, surname, email, password) values ($1, $2, $3, $4) returning*';
    const result = (await client.query(sql, [name, surname, email, password])).rows
    return result;
}

async function updateUserDB(id, name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'update users set  name = $1, surname =$2, email =$3, password=$4 where id=$5 returning*';
    const result = (await client.query(sql, [name, surname, email, password, id])).rows;
    return result;
}

async function getUserByEmail(email) {
    const client = await pool.connect();
    const sql = 'select * from users where email =$1';
    const result = (await client.query(sql, [email])).rows;
    return result;
}

module.exports = { getAllUsersDB, createUserDB, updateUserDB, getUserByEmail }