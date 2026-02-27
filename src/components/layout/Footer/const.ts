import type { FooterColumn } from './types';

const customerCare = 'footer.columns.customerCare';
const discover = 'footer.columns.discover';
const ourCompany = 'footer.columns.ourCompany';
const followUs = 'footer.columns.followUs';

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    key: 'customerCare',
    label: `${customerCare}.title`,
    links: [
      { labelKey: `${customerCare}.contact`, to: '/contact' },
      { labelKey: `${customerCare}.faq`, to: '/faq' },
      { labelKey: `${customerCare}.booking`, to: '/booking' },
      { labelKey: `${customerCare}.services`, to: '/services' },
    ],
  },
  {
    key: 'discover',
    label: `${discover}.title`,
    links: [
      { labelKey: `${discover}.catalog`, to: '/catalog' },
      { labelKey: `${discover}.collections`, to: '/collections' },
      { labelKey: `${discover}.bracelets`, to: '/catalog/bracelets' },
      { labelKey: `${discover}.necklaces`, to: '/catalog/necklaces' },
      { labelKey: `${discover}.rings`, to: '/catalog/rings' },
      { labelKey: `${discover}.cufflinks`, to: '/catalog/cufflinks' },
    ],
  },
  {
    key: 'ourCompany',
    label: `${ourCompany}.title`,
    links: [
      { labelKey: `${ourCompany}.about`, to: '/about' },
      { labelKey: `${ourCompany}.guide`, to: '/about' },
      { labelKey: `${ourCompany}.blog`, to: '/blog' },
      { labelKey: `${ourCompany}.shipping`, to: '/about' },
      { labelKey: `${ourCompany}.privacy`, to: '/about' },
    ],
  },
  {
    key: 'FollowUs',
    label: `${followUs}.title`,
    isSocial: true,
    socials: [
      { iconKey: 'instagram', to: 'https://www.instagram.com/kassaman_armenia/?hl=en' },
      { iconKey: 'facebook', to: 'https://www.facebook.com/kassamanjewelryhouse/' },
    ],
    contact: {
      labelKey: `${followUs}.contact`,
      phone: '+374 77 90 06 10',
    },
  },
];
