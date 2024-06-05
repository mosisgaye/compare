const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const lebara = await prisma.category.create({
    data: {
      name: 'Lebara',
      slug: 'lebara',
    },
  })

  const poste = await prisma.category.create({
    data: {
      name: 'La poste Mobile',
      slug: 'poste',
    },
  })

  const sosh = await prisma.category.create({
    data: {
      name: 'Sosh',
      slug: 'sosh',
    },
  })

  const you = await prisma.category.create({
    data: {
      name: 'You',
      slug: 'you',
    },
  })

  console.log({ lebara, poste, sosh, you })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
