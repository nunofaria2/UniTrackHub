const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
    const { nome, email, passe } = req.body;

    try {
        const newUser = await prisma.utilizadores.create({
            data: {
                Nome: nome,
                Email: email,
                Passe: passe,  
            },
        });

        res.json(newUser);
    } catch (error) {
        console.error('Erro ao registrar o utilizador:', error);
        res.status(500).json({ error: 'Erro ao registrar o utilizador' });
    }
};

exports.login = async (req, res) => {
    const { email, passe } = req.body;

    try {
        const user = await prisma.utilizadores.findUnique({
            where: {
                Email: email,
            },
        });

        if (user && user.Passe === passe) {
            res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
};
