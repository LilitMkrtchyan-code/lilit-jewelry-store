import { useLang } from '../../../hooks/useLang';
import type { LanguageSwitcherProps } from './types';
import BaseModal from '../BaseModal';
import LanguagePicker from './LanguagePicker';

const LanguageSwitcher = ({ open, onCancel }: LanguageSwitcherProps) => {
  const { currentLang, changeLanguage } = useLang();

  const handleSelect = (langKey: string) => {
    changeLanguage(langKey);
    onCancel();
  };

  return (
    <BaseModal open={open} onCancel={onCancel}>
      <LanguagePicker currentLang={currentLang} onSelect={handleSelect} />
    </BaseModal>
  );
};
export default LanguageSwitcher;
