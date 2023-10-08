const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const secret = 'alina';
    return jwt.sign(user[0], secret)
}

module.exports = createToken;