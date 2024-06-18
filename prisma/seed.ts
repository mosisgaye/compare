const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newCategories = [
    { name: 'Sans Engagement', slug: 'sans-engagement' },
    { name: 'Les Moins Chers', slug: 'les-moins-chers' },
    { name: 'Forfait 5G', slug: 'forfait-5g' },
    { name: 'Opérateurs', slug: 'operateurs' },
  ];

  for (const category of newCategories) {
    await prisma.category.create({
      data: category,
    });
  }

  console.log('Nouvelles catégories ajoutées avec succès !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
