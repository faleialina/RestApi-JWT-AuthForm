const bcrypt = require('bcrypt');
const { getAllUsersDB, createUserDB, updateUserDB, deleteUserDB, getUserByEmail } = require('../repository/user.repository');
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
async function deleteUser(id, name, surname, email, password) {
    const data = await deleteUserDB(id, name, surname, email, password);
    return data;
}

async function authorizationUser(email, password) {
    const foundUser = await getUserByEmail(email);
    if (!foundUser.length) throw new Error('такого пользователя нет');
    const bool = await bcrypt.compare(password, foundUser[0].password);
    if (!(bool)) throw new Error('pwd не совпадают');
    return foundUser;
}



module.exports = { getAllUsers, createUser, updateUser, deleteUser, authorizationUser }
