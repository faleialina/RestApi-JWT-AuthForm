const bcrypt = require('bcrypt');
const { getAllUsersDB, createUserDB, updateUserDB, getUserByEmail } = require('../repository/user.repository');
async function getAllUsers() {
    const data = await getAllUsersDB();
    return data;
}

async function createUser(name, surname, email, password) {
    const user = await getUserByEmail(email);
    if (user.length) throw new Error('такой пользователь есть')
    const saltround = 3;
    const hashedPassword = await bcrypt.hash(password, saltround)
    const data = await createUserDB(name, surname, email, hashedPassword);
    return data;


}

async function updateUser(id, name, surname, email, password) {
    const data = await updateUserDB(id, name, surname, email, password);
    return data;
}




module.exports = { getAllUsers, createUser, updateUser }
