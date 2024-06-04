const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.utilizadores.create({
    data: {
      Nome: 'Nome do Utilizador',
      Email: 'email@exemplo.com',
      Dia_semana: 'Segunda-feira',
      Hora_Inicio: new Date('1970-01-01T09:00:00.000Z'),
      Hora_Fim: new Date('1970-01-01T17:00:00.000Z'),
    },
  });

  console.log(newUser);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
