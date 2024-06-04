const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
  const { nome, email, dia_semana, hora_inicio, hora_fim } = req.body;

  try {
    const newUser = await prisma.utilizadores.create({
      data: {
        Nome: nome,
        Email: email,
        Dia_semana: dia_semana,
        Hora_Inicio: hora_inicio,
        Hora_Fim: hora_fim,
      },
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar o utilizador' });
  }
};
