import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, X, Smartphone, Copy, Landmark } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { useTranslation } from 'react-i18next';

const PaymentModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    showSuccess(t('payment_modal.nequi_copy_success'));
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-gray-900 text-white border-purple-800 w-full max-w-4xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{t('payment_modal.title')}</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-400">
            {t('payment_modal.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nequi */}
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-gray-700/50 transition-all text-center">
                <Smartphone className="h-12 w-12 mb-3 text-purple-400"/>
                <p className="font-bold text-lg mb-2">{t('payment_modal.nequi_title')}</p>
                <p className="text-gray-300 text-sm">{t('payment_modal.nequi_name')}</p>
                <div className="flex items-center gap-2 mt-2 bg-black/20 px-3 py-1 rounded-md">
                    <p className="font-mono text-purple-300">311 554 1784</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white" onClick={() => handleCopy('3115541784')}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            {/* PayPal */}
            <a href="https://paypal.me/emmyjuanita" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all text-center">
                <CreditCard className="h-12 w-12 mb-3 text-blue-400"/>
                <p className="font-bold text-lg mb-2">{t('payment_modal.paypal_title')}</p>
                <p className="text-gray-300 text-sm">{t('payment_modal.paypal_description')}</p>
                <p className="font-mono text-blue-300 mt-2 break-all">paypal.me/emmyjuanita</p>
            </a>
            {/* Banco Caja Social */}
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500 hover:bg-gray-700/50 transition-all text-center">
                <Landmark className="h-12 w-12 mb-3 text-green-400"/>
                <p className="font-bold text-lg mb-2">{t('payment_modal.banco_caja_social_title')}</p>
                <p className="text-gray-300 text-sm">{t('payment_modal.banco_caja_social_name')}</p>
                <p className="text-gray-400 text-xs mt-2">{t('payment_modal.banco_caja_social_account_type')}</p>
                <div className="flex items-center gap-2 mt-1 bg-black/20 px-3 py-1 rounded-md">
                    <p className="font-mono text-green-300">24053383318</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white" onClick={() => handleCopy('24053383318')}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onClose} className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-colors">
            <X className="mr-2 h-4 w-4" /> {t('payment_modal.close_button')}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentModal;