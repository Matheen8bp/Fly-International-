export interface Package {
  id: string;
  type: 'Haj' | 'Umrah';
  title: string;
  duration: string;
  price: number;
  hotelMakkah: string;
  hotelMadinah: string;
  rating: number;
  features: string[];
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'Guide' | 'Ritual' | 'Checklist';
  description: string;
  icon: string;
}
