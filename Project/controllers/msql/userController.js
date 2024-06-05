const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
    const { nome, email, passe } = req.body;

    try {
        const newUser = await prisma.utilizadores.create({
            data: {
                Nome: nome,
                Email: email,
                Passe: passe,  // Certifique-se de que o campo está corretamente usado
            },
        });

        res.json(newUser);
    } catch (error) {
        console.error('Erro ao registrar o utilizador:', error);
        res.status(500).json({ error: 'Erro ao registrar o utilizador' });
    }
};
