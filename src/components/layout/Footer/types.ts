export type SocialIconKey = 'facebook' | 'instagram';

export type SocialItem = {
  iconKey: SocialIconKey;
  to: string;
};

export type FooterLink = {
  labelKey: string;
  to: string;
};

export type FooterColumn = {
  key: string;
  label: string;
  links?: FooterLink[];
  isSocial?: boolean;
  socials?: SocialItem[];
  contact?: {
    labelKey: string;
    phone: string;
  };
};
