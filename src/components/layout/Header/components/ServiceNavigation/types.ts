export type ServiceItem = {
  id: string;
  titleKey: string;
  iconKey: string;
  slug?: string;
  isAction?: boolean;
};

export type ServiceNavigationProps = {
  onClose: () => void;
  onOpenLang: () => void;
};
