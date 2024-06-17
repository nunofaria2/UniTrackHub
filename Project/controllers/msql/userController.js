const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    console.log('Tentativa de login com email:', email);

    try {
        const user = await prisma.utilizadores.findUnique({
            where: { Email: email }
        });

        if (!user) {
            console.log('Utilizador não encontrado');
            return res.status(404).json({ message: 'Utilizador não encontrado' });
        }

        console.log('Utilizador encontrado:', user);

        const passwordIsValid = bcrypt.compareSync(password, user.Passe);

        if (!passwordIsValid) {
            console.log('Senha inválida');
            return res.status(401).json({ message: 'Senha inválida' });
        }

        console.log('Login bem-sucedido');
        req.session.user = user;
        res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        console.log('Erro ao tentar fazer login:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.signup = async (req, res) => {
    const { name, email, password, isAdmin, turmaId } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    try {
        const newUser = await prisma.utilizadores.create({
            data: {
                Email: email,
                Nome: name,
                Passe: hashedPassword,
                isAdmin: isAdmin || false,  // Se isAdmin não for passado, será false
                id_turma: parseInt(turmaId, 10),
            },
        });
        res.status(200).json({ nome: newUser.Nome, msg: "Utilizador criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao fazer logout' });
        }
        res.json({ message: 'Logout bem-sucedido' });
    });
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.utilizadores.findMany();
        res.json(users);
    } catch (error) {
        console.error('Erro ao buscar utilizadores:', error.message);
        res.status(500).send('Internal Server Error');
    }
};



exports.createUser = async (req, res) => {
    const { name, email, password, isAdmin, turmaId } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.utilizadores.create({
            data: {
                Nome: name,
                Email: email,
                Passe: hashedPassword,
                isAdmin: isAdmin || false,  // Se isAdmin não for passado, será false
                id_turma: parseInt(turmaId, 10),
            }
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar utilizador:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, isAdmin, turmaId } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await prisma.utilizadores.update({
            where: { id_utilizador: parseInt(id, 10) },
            data: {
                Nome: name,
                Email: email,
                Passe: hashedPassword,
                isAdmin: isAdmin || false,  // Se isAdmin não for passado, será false
                id_turma: parseInt(turmaId, 10),
            }
        });
        res.json(updatedUser);
    } catch (error) {
        console.error('Erro ao atualizar utilizador:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await prisma.utilizadores.delete({
            where: {
                id_utilizador: parseInt(id)
            }
        });
        res.json({ message: 'Utilizador eliminado com sucesso' });
    } catch (error) {
        console.error('Erro ao eliminar utilizador:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.getLoggedUser = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Usuário não logado' });
        }

        const userId = req.session.user.id_utilizador;
        const user = await prisma.utilizadores.findUnique({
            where: { id_utilizador: userId },
            include: { turmas: true } // Inclua a relação com as turmas
        });

        if (!user) {
            return res.status(404).json({ message: 'Utilizador não encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error('Erro ao buscar o utilizador logado:', error.message);
        res.status(500).send('Internal Server Error');
    }
};
