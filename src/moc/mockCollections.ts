import signature from '../assets/img/collections/signature.jpg';
import prestige from '../assets/img/collections/prestige.jpg';
import timeless from '../assets/img/collections/timeless.jpg';
import wedding from '../assets/img/collections/wedding.jpg';
import type { ProductCollection } from '../types/collection';

export const MOCK_COLLECTIONS: ProductCollection[] = [
  {
    id: '1',
    titleKey: 'productCollections.signature.title',
    subtitleKey: 'productCollections.signature.subtitle',
    image: {
      src: signature,
      alt: 'productCollections.signature.altText',
    },
    slug: 'signature',
  },
  {
    id: '2',
    titleKey: 'productCollections.prestige.title',
    subtitleKey: 'productCollections.prestige.subtitle',
    image: {
      src: prestige,
      alt: 'productCollections.prestige.altText',
    },
    slug: 'prestige',
  },
  {
    id: '3',
    titleKey: 'productCollections.timeless.title',
    subtitleKey: 'productCollections.timeless.subtitle',
    image: {
      src: timeless,
      alt: 'productCollections.timeless.altText',
    },
    slug: 'timeless',
  },
  {
    id: '4',
    titleKey: 'productCollections.wedding.title',
    subtitleKey: 'productCollections.wedding.subtitle',
    image: {
      src: wedding,
      alt: 'productCollections.wedding.altText',
    },
    slug: 'wedding',
  },
];
