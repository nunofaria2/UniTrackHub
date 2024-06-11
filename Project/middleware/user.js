const authenticateUtil = require('../utils/authenticate.js');

// middleware/user.js
const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else {
        res.status(401).send('Não autorizado. Por favor, faça login.');
    }
};

module.exports = isLoggedIn;


