const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Tentativa de login com email:', email);
        const user = await prisma.utilizadores.findUnique({
            where: { Email: email }
        });

        if (!user) {
            console.log('Usuário não encontrado');
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        console.log('Usuário encontrado:', user);

        console.log('Senha fornecida:', password);
        console.log('Senha armazenada:', user.Passe);

        const isMatch = await bcrypt.compare(password, user.Passe);
        if (!isMatch) {
            console.log('Senha inválida');
            return res.status(401).json({ message: 'Senha inválida' });
        }

        const token = jwt.sign({ userId: user.id_utilizador }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Login bem-sucedido');

        res.json({ token });
    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

exports.signup = async (req, res) => {
    try {
        const { nome, email, password, isAdmin } = req.body;
        console.log(req.body); // Exibe os dados recebidos

        const hashedPassword = bcrypt.hashSync(password, 8);
        console.log('Senha encriptada:', hashedPassword);

        const newUser = await prisma.utilizadores.create({
            data: {
                Email: email,
                Nome: nome,
                Passe: hashedPassword,
                isAdmin: isAdmin || false
            },
        });
        return res.status(200).json({ nome: newUser.Nome, msg: "Utilizador criado com sucesso!" });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ msg: error.message });
    }
};
