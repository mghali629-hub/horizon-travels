import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Horizon Travels database...');

  await prisma.booking.deleteMany();
  await prisma.tour.deleteMany();
  await prisma.jetCharter.deleteMany();

  await prisma.tour.createMany({
    data: [
      {
        title: 'Amalfi Coast & Capri Private Yacht Expedition',
        location: 'Amalfi Coast, Italy',
        region: 'Europe',
        price: '$18,500',
        duration: '8 Days',
        rating: 4.98,
        reviews: 42,
        category: 'Yacht Charter',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80',
        description: 'Private 50m superyacht charter, Michelin-starred cliffside dining, heli-transfer from Naples.',
      },
      {
        title: 'Serengeti Heli-Safari & Private Island Reserve',
        location: 'Tanzania & Seychelles',
        region: 'Africa',
        price: '$32,000',
        duration: '12 Days',
        rating: 5.0,
        reviews: 28,
        category: 'Private Aviation Safari',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
        description: 'Private helicopter safari over the Great Migration followed by 5 nights on a private Seychellois island.',
      },
    ],
  });

  await prisma.jetCharter.create({
    data: {
      modelName: 'Gulfstream G650ER',
      passengers: 14,
      range: '7,500 nm',
      pricePerHour: '$14,500/hr',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
    },
  });

  console.log('Horizon Travels database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
