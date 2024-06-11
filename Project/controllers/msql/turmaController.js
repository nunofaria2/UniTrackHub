const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllTurmas = async (req, res) => {
    try {
        const turmas = await prisma.turmas.findMany();
        res.json(turmas);
    } catch (error) {
        console.error('Erro ao buscar turmas:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.getTurmaById = async (req, res) => {
    const { id } = req.params;
    try {
        const turma = await prisma.turmas.findUnique({
            where: { id_turma: parseInt(id, 10) }
        });
        if (!turma) {
            return res.status(404).json({ message: 'Turma não encontrada' });
        }
        res.json(turma);
    } catch (error) {
        console.error('Erro ao buscar turma por ID:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.createTurma = async (req, res) => {
    const { NomeTurma, Descricao } = req.body;
    try {
        const newTurma = await prisma.turmas.create({
            data: {
                NomeTurma,
                Descricao
            }
        });
        res.status(201).json(newTurma);
    } catch (error) {
        console.error('Erro ao criar turma:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateTurma = async (req, res) => {
    const { id } = req.params;
    const { NomeTurma, Descricao } = req.body;
    try {
        const updatedTurma = await prisma.turmas.update({
            where: { id_turma: parseInt(id, 10) },
            data: {
                NomeTurma,
                Descricao
            }
        });
        res.json(updatedTurma);
    } catch (error) {
        console.error('Erro ao atualizar turma:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteTurma = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.turmas.delete({
            where: { id_turma: parseInt(id, 10) }
        });
        res.json({ message: 'Turma eliminada com sucesso' });
    } catch (error) {
        console.error('Erro ao eliminar turma:', error.message);
        res.status(500).send('Internal Server Error');
    }
};
