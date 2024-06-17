// controllers/msql/horariosController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllHorarios = async (req, res) => {
    try {
        const horarios = await prisma.horarios.findMany();
        res.json(horarios);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch horarios' });
    }
};

exports.getHorarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const horario = await prisma.horarios.findUnique({ where: { id_horario: parseInt(id) } });
        res.json(horario);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch horario' });
    }
};

exports.createHorario = async (req, res) => {
    const { Data_inicio, Data_fim, id_turma } = req.body;
    try {
        const newHorario = await prisma.horarios.create({
            data: {
                Data_inicio: new Date(Data_inicio),
                Data_fim: new Date(Data_fim),
                id_turma: parseInt(id_turma)
            }
        });
        res.json(newHorario);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create horario' });
    }
};

exports.updateHorario = async (req, res) => {
    const { id } = req.params;
    const { Data_inicio, Data_fim, id_turma } = req.body;
    try {
        const updatedHorario = await prisma.horarios.update({
            where: { id_horario: parseInt(id) },
            data: {
                Data_inicio: new Date(Data_inicio),
                Data_fim: new Date(Data_fim),
                id_turma: parseInt(id_turma)
            }
        });
        res.json(updatedHorario);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update horario' });
    }
};

exports.deleteHorario = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.horarios.delete({ where: { id_horario: parseInt(id) } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete horario' });
    }
};

exports.getHorariosByTurma = async (req, res) => {
    const { turmaId } = req.params;
    try {
        const horarios = await prisma.horarios.findMany({
            where: { id_turma: parseInt(turmaId, 10) }
        });
        res.json(horarios);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch horarios by turma' });
    }
};


