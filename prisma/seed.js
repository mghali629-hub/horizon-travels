const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Horizon Travels DB...');

  await prisma.booking.deleteMany();
  await prisma.tour.deleteMany();
  await prisma.review.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.jetCharter.deleteMany();
  await prisma.yachtCharter.deleteMany();

  const tours = [
    {
      title: 'Amalfi Coast Royal Villa & Helicopter Safari',
      location: 'Positano, Italy',
      region: 'Europe',
      price: '$18,500',
      duration: '7 Days',
      rating: 4.98,
      reviews: 42,
      category: 'Ultra-Luxury',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
      description: 'Exclusive cliffside cliff villa stay with private speedboat access, Michelin-star chef service, and daily helicopter tours of Capri.'
    },
    {
      title: 'Kyoto Imperial Temple & Private Onsen Reserve',
      location: 'Kyoto, Japan',
      region: 'Asia',
      price: '$22,000',
      duration: '10 Days',
      rating: 4.99,
      reviews: 58,
      category: 'Cultural Heritage',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
      description: 'VIP access to closed imperial tea ceremonies, private geisha performances, and secluded bamboo forest hot spring ryokans.'
    },
    {
      title: 'Serengeti Private Jet Safari & Hot Air Balloon Sanctuary',
      location: 'Serengeti, Tanzania',
      region: 'Africa',
      price: '$35,000',
      duration: '8 Days',
      rating: 5.0,
      reviews: 31,
      category: 'Wildlife Expedition',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
      description: 'Fly by private turboprop directly into ultra-exclusive game reserves with dedicated wildlife tracking experts and luxury canvas suites.'
    },
    {
      title: 'Maldives Overwater Glass Sanctuary & Submarine Dining',
      location: 'Baa Atoll, Maldives',
      region: 'Asia',
      price: '$28,000',
      duration: '6 Days',
      rating: 4.97,
      reviews: 64,
      category: 'Island Haven',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      description: 'Unlimited private butler service, deep-sea submarine excursions, and starlight ocean bed sleeping experiences.'
    },
    {
      title: 'Swiss Alps Glass Igloo & Heliskiing Expedition',
      location: 'Zermatt, Switzerland',
      region: 'Europe',
      price: '$24,500',
      duration: '7 Days',
      rating: 4.96,
      reviews: 29,
      category: 'Alpine High Adventure',
      image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800&auto=format&fit=crop',
      description: 'First-descent untouched powder heliskiing with Matterhorn views, private thermal spa access, and vintage wine cellar tastings.'
    }
  ];

  for (const tour of tours) {
    await prisma.tour.create({ data: tour });
  }

  await prisma.review.createMany({
    data: [
      { guestName: 'Duchess Isabella', rating: 5.0, comment: 'The Amalfi villa and private helicopter transfer exceeded all expectations of European high society.', tourTitle: 'Amalfi Coast Royal Villa' },
      { guestName: 'Lord Sterling', rating: 4.9, comment: 'Flawless concierge coordination from jet touchdown to private temple entrance in Kyoto.', tourTitle: 'Kyoto Imperial Temple' }
    ]
  });

  await prisma.blogPost.createMany({
    data: [
      {
        slug: 'private-jet-safari-guide-2026',
        title: 'The Art of the Private Jet African Safari',
        author: 'Julian Vance',
        date: 'August 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
        excerpt: 'Discover how private aviation eliminates layovers to grant immediate access to untouched wildlife havens.',
        content: 'Bespoke travel has entered a new golden era where time is the ultimate luxury asset...'
      }
    ]
  });

  await prisma.jetCharter.createMany({
    data: [
      { modelName: 'Gulfstream G700', passengers: 19, range: '7,500 NM', pricePerHour: '$14,500', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop' },
      { modelName: 'Bombardier Global 7500', passengers: 16, range: '7,700 NM', pricePerHour: '$16,000', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop' }
    ]
  });

  await prisma.yachtCharter.createMany({
    data: [
      { yachtName: 'M/Y Solana Horizon', length: '85 Meters', cabins: 7, pricePerDay: '$95,000', image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop' }
    ]
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
