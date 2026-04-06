import { Package, Testimonial, Resource } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'umrah-economy-14',
    type: 'Umrah',
    title: 'Economy Umrah Package',
    duration: '14 Days',
    price: 65000,
    hotelMakkah: '3 Star Hotel (600m from Haram)',
    hotelMadinah: '3 Star Hotel (400m from Masjid Nabawi)',
    rating: 4,
    features: ['Visa Processing', 'Economy Flights', 'Ziyarat included', 'Local Transport'],
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    description: 'A budget-friendly package for those seeking a spiritual journey without compromising on essential comforts.'
  },
  {
    id: 'umrah-premium-10',
    type: 'Umrah',
    title: 'Premium Umrah Package',
    duration: '10 Days',
    price: 95000,
    hotelMakkah: '5 Star Hotel (Front of Haram)',
    hotelMadinah: '5 Star Hotel (Front of Masjid Nabawi)',
    rating: 5,
    features: ['VIP Visa Processing', 'Business Class Flights', 'Private Ziyarat', 'Luxury Transport'],
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the ultimate comfort and proximity to the holy sites with our premium luxury package.'
  },
  {
    id: 'haj-standard-21',
    type: 'Haj',
    title: 'Standard Haj Package',
    duration: '21 Days',
    price: 450000,
    hotelMakkah: '4 Star Hotel',
    hotelMadinah: '4 Star Hotel',
    rating: 4,
    features: ['Haj Visa', 'Full Board Meals', 'Mina/Arafat Tents', 'Religious Guide'],
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive Haj package covering all rituals with expert guidance and comfortable stay.'
  },
  {
    id: 'haj-deluxe-25',
    type: 'Haj',
    title: 'Deluxe Haj Package',
    duration: '25 Days',
    price: 650000,
    hotelMakkah: '5 Star Hotel',
    hotelMadinah: '5 Star Hotel',
    rating: 5,
    features: ['VIP Haj Visa', 'Luxury Tents in Mina', 'Private Transport', '24/7 Support'],
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800',
    description: 'Our most exclusive Haj offering with premium services at every step of your sacred journey.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Khan',
    location: 'London, UK',
    text: 'Fly International made my Umrah journey seamless. The hotels were exactly as promised, very close to the Haram.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    id: '2',
    name: 'Fatima Zahra',
    location: 'Dubai, UAE',
    text: 'The guides were very knowledgeable and helpful during the Haj rituals. Highly recommend their services.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=fatima'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'haj-guide',
    title: 'Step-by-Step Haj Guide',
    category: 'Guide',
    description: 'A comprehensive guide to performing all the rituals of Haj correctly.',
    icon: 'BookOpen'
  },
  {
    id: 'umrah-rituals',
    title: 'Umrah Rituals Explained',
    category: 'Ritual',
    description: 'Understand the significance and procedure of Umrah rituals.',
    icon: 'Info'
  },
  {
    id: 'packing-list',
    title: 'Pilgrim Packing Checklist',
    category: 'Checklist',
    description: 'Essential items you need to carry for your spiritual journey.',
    icon: 'CheckSquare'
  }
];
