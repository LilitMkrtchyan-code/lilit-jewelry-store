import type { ServiceItem } from './types';

const service = 'header.menu.service';

export const HEADER_SERVICE_NAVIGATION: ServiceItem[] = [
  { id: 's3', titleKey: `${service}.account`, slug: 'account', iconKey: 'account' },
  { id: 's1', titleKey: `${service}.contact`, slug: 'contact', iconKey: 'contact' },
  { id: 's2', titleKey: `${service}.services`, slug: 'services', iconKey: 'services' },

  {
    id: 's4',
    titleKey: `${service}.storeLocator`,
    slug: 'store-locator',
    iconKey: 'storeLocator',
  },
  {
    id: 's5',
    titleKey: `${service}.language`,
    isAction: true,
    iconKey: 'language',
  },
];
