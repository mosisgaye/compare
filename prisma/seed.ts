const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const newCategories = [
    { name: 'Box 100 Mb/s', slug: 'box-100mbps' },
    { name: 'Box 500 Mb/s', slug: 'box-500mbps' },
    { name: 'Box 2 Gb/s', slug: 'box-2gbps' },
    { name: 'Box 8 Gb/s', slug: 'box-8gbps' },
  ]

  for (const category of newCategories) {
    await prisma.category.create({
      data: category,
    })
  }

  console.log('Nouvelles catégories ajoutées avec succès !')
}


main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

