const bcrypt = require('bcryptjs');
const authenticateUtil = require('../../utils/authenticate.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.utilizadores.findUnique({
            where: { Email: email },
        });

        if (!user) {
            return res.status(404).json({ msg: "Utilizador não encontrado!" });
        }

        var passwordIsValid = bcrypt.compareSync(password, user.Passe);
        if (!passwordIsValid) {
            return res.status(401).json({ msg: "Password inválida!" });
        }

        const accessToken = authenticateUtil.generateAccessToken({
            id: user.id,
            nome: user.Nome,
            isAdmin: user.isAdmin,
        });
        
        res.status(200).json({ nome: user.Nome, token: accessToken });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ msg: error.message });
    }
};


exports.signup = async (req, res) => {
    try {
        const { nome, email, password, isAdmin } = req.body;
        console.log(req.body); // Exibe os dados recebidos

        const newUser = await prisma.utilizadores.create({
            data: {
                Email: email,
                Nome: nome,
                Passe: bcrypt.hashSync(password, 8),
                isAdmin: isAdmin || false
            },
        });
        return res.status(200).json({ nome: newUser.Nome, msg: "Utilizador criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
