const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.utilizadores.create({
    data: {
      Nome: 'Nome do Utilizador',
      Email: 'email@exemplo.com',
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
