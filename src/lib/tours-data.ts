export interface Tour {
  id: number;
  title: string;
  location: string;
  region: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
  highlights: string[];
}

export const INITIAL_TOURS: Tour[] = [
  {
    id: 1,
    title: 'Santorini Private Yacht Expedition',
    location: 'Cyclades, Greece',
    region: 'Europe',
    price: '$6,800',
    duration: '7 Days / 6 Nights',
    rating: 4.98,
    reviews: 124,
    category: 'Yacht Cruise',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
    description: 'Sail through pristine Aegean waters on a private catamaran with private chef dining and sunset views.',
    highlights: ['Private Catamaran Charter', 'Private Chef Daily Dining', 'Volcanic Hot Springs Tour', 'Oia Cliffside Villa Suite']
  },
  {
    id: 2,
    title: 'Kyoto Imperial Sanctuary & Culinary Safari',
    location: 'Kyoto, Japan',
    region: 'Asia',
    price: '$8,200',
    duration: '9 Days / 8 Nights',
    rating: 4.99,
    reviews: 98,
    category: 'Cultural Luxury',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    description: 'Immerse in private tea ceremonies led by grand masters and savor 3-Star Michelin Kaiseki culinary rituals.',
    highlights: ['Private Tea Master Ceremony', '3-Star Michelin Kaiseki', 'Private Geisha Evening Performance', 'Helicopter Transfer over Mount Fuji']
  },
  {
    id: 3,
    title: 'Serengeti Royal Helicopter Safari',
    location: 'Serengeti, Tanzania',
    region: 'Africa',
    price: '$12,400',
    duration: '10 Days / 9 Nights',
    rating: 5.0,
    reviews: 86,
    category: 'Wild Safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    description: 'Experience the Great Migration from private luxury tents with private game drives and hot air balloon champagne breakfasts.',
    highlights: ['Private Game Drives', 'Hot Air Balloon Safari', 'Luxury Tent Accommodations', 'Private Ranger & Naturalist']
  },
  {
    id: 4,
    title: 'Swiss Alps Helicopter & Alpine Chalet',
    location: 'Zermatt, Switzerland',
    region: 'Europe',
    price: '$14,500',
    duration: '8 Days / 7 Nights',
    rating: 4.97,
    reviews: 110,
    category: 'Alpine Luxury',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    description: 'Ski private glaciers with heli-skiing guides, private Michelin dining, and thermal spa relaxation in Zermatt.',
    highlights: ['Heli-Skiing Guided Passes', 'Private Chalet Butler Service', 'Matterhorn Helicopter Tour', 'Thermal Spa Access']
  },
  {
    id: 5,
    title: 'Bora Bora Overwater Lagoon Sanctuary',
    location: 'Society Islands, French Polynesia',
    region: 'Asia',
    price: '$16,200',
    duration: '7 Days / 6 Nights',
    rating: 4.99,
    reviews: 142,
    category: 'Tropical Villa',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    description: 'Stay in a glass-floor overwater villa with private plunge pool, canoe breakfast service, and private ray diving.',
    highlights: ['Glass-Floor Overwater Villa', 'Canoe Breakfast Delivery', 'Private Ray & Shark Snorkel', 'Submarine Lagoon Tour']
  },
  {
    id: 6,
    title: 'Amalfi Coast Superyacht Charter',
    location: 'Positano, Italy',
    region: 'Europe',
    price: '$18,900',
    duration: '7 Days / 6 Nights',
    rating: 4.96,
    reviews: 94,
    category: 'Superyacht Charter',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    description: 'Explore Positano, Capri, and Ravello from a 45-meter superyacht equipped with jet skis, private sommelier, and deck jacuzzi.',
    highlights: ['45m Superyacht Access', 'Capri Blue Grotto Tour', 'Private Sommelier Wine Pairing', 'Jet Ski & Water Seabobs']
  }
];
