const checkAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.isAdmin) {
        next(); // Continue se o usuário for um administrador
    } else {
        return res.status(403).json({ message: 'Acesso não autorizado' });
    }
};

module.exports = checkAdmin;
