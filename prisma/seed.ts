const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const orange = await prisma.category.create({
    data: {
      name: 'Orange',
      slug: 'orange',
    },
  })

  const sfr = await prisma.category.create({
    data: {
      name: 'SFR',
      slug: 'sfr',
    },
  })

  const free = await prisma.category.create({
    data: {
      name: 'Free',
      slug: 'free',
    },
  })

  const bouygues = await prisma.category.create({
    data: {
      name: 'Bouygues',
      slug: 'bouygues',
    },
  })

  console.log({ orange, sfr, free, bouygues })
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
