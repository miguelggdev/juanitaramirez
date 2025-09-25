import { useTranslation } from 'react-i18next';

export const FooterCredit = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {t('footer_credit')}
      </p>
    </div>
  );
};