import type { ServiceItem } from './types';

const service = 'header.menu.service';

export const HEADER_SERVICE_NAVIGATION: ServiceItem[] = [
  { id: 's1', titleKey: `${service}.account`, slug: 'account', iconKey: 'account' },
  { id: 's2', titleKey: `${service}.favorites`, slug: 'favorites', iconKey: 'favorites' },
  { id: 's3', titleKey: `${service}.contact`, slug: 'contact', iconKey: 'contact' },
  { id: 's4', titleKey: `${service}.services`, slug: 'services', iconKey: 'services' },

  {
    id: 's5',
    titleKey: `${service}.storeLocator`,
    slug: 'store-locator',
    iconKey: 'storeLocator',
  },
  {
    id: 's6',
    titleKey: `${service}.language`,
    isAction: true,
    iconKey: 'language',
  },
];
