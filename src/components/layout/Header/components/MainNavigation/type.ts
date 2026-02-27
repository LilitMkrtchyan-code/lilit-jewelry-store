export type NavItem = {
  id: string;
  titleKey: string;
  slug: string;
  children?: NavItem[];
  image?: {
    src: string;
    alt?: string;
  };
};

export type MainNavigationProps = {
  onClose: () => void;
  isOpen: boolean;
};
