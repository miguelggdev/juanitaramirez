import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, X, Smartphone, Copy } from "lucide-react";
import { showSuccess } from "@/utils/toast";

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    showSuccess("¡Número copiado al portapapeles!");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-gray-900 text-white border-purple-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Opciones de Pago</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-400">
            Elige tu método de pago preferido. ¡Gracias por tu apoyo!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-gray-700/50 transition-all text-center">
                <Smartphone className="h-12 w-12 mb-3 text-purple-400"/>
                <p className="font-bold text-lg mb-2">Nequi</p>
                <p className="text-gray-300 text-sm">Juan Ramírez C.</p>
                <div className="flex items-center gap-2 mt-2 bg-black/20 px-3 py-1 rounded-md">
                    <p className="font-mono text-purple-300">311 554 1784</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white" onClick={() => handleCopy('3115541784')}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <a href="https://paypal.me/emmyjuanita" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all text-center">
                <CreditCard className="h-12 w-12 mb-3 text-blue-400"/>
                <p className="font-bold text-lg mb-2">PayPal</p>
                <p className="text-gray-300 text-sm">Click para donar de forma segura</p>
                <p className="font-mono text-blue-300 mt-2">paypal.me/emmyjuanita</p>
            </a>
        </div>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onClose} className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-colors">
            <X className="mr-2 h-4 w-4" /> Cerrar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentModal;