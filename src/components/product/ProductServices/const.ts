import type { ServiceItem } from './types';
import { HandPlatter, Headset, MapPin } from 'lucide-react';

export const PRODUCT_SERVICES: ServiceItem[] = [
  {
    icon: Headset,
    labelKey: 'header.menu.service.contact',
    to: '/contact',
  },
  {
    icon: HandPlatter,
    labelKey: 'header.menu.service.services',
    to: '/services',
  },
  {
    icon: MapPin,
    labelKey: 'header.menu.service.storeLocator',
    to: '/store-locator',
  },
];
