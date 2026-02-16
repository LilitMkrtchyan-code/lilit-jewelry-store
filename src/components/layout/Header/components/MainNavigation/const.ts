import type { NavItem } from './type';

const section = 'header.menu.sections';
const category = 'header.menu.categories';
const collection = 'header.menu.collections';

export const HEADER_MAIN_NAVIGATION: NavItem[] = [
  {
    id: '1',
    titleKey: `${section}.shopByCategory`,
    slug: 'catalog',
    children: [
      { id: 'cat1', titleKey: `${category}.bracelets`, slug: 'bracelets' },
      { id: 'cat2', titleKey: `${category}.cufflinks`, slug: 'cufflinks' },
      { id: 'cat3', titleKey: `${category}.necklaces`, slug: 'necklaces' },
      { id: 'cat4', titleKey: `${category}.rings`, slug: 'rings' },
    ],
  },
  {
    id: '2',
    titleKey: `${section}.collections`,
    slug: 'collections',
    children: [
      { id: 'collection1', titleKey: `${collection}.signature`, slug: 'signature' },
      { id: 'collection2', titleKey: `${collection}.prestige`, slug: 'prestige' },
      { id: 'collection3', titleKey: `${collection}.timeless`, slug: 'timeless' },
      { id: 'collection4', titleKey: `${collection}.wedding`, slug: 'wedding' },
    ],
  },
];
