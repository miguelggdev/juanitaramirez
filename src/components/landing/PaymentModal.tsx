import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, X } from "lucide-react";

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-gray-900 text-white border-purple-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Opciones de Pago</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-400">
            Elige tu método de pago preferido. ¡Gracias por tu apoyo!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg">
                <p className="font-bold mb-2">Nequi</p>
                <img src="https://via.placeholder.com/150x150?text=QR+Nequi" alt="QR Nequi" className="rounded-md"/>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg">
                <p className="font-bold mb-2">PayPal</p>
                <a href="#" className="flex flex-col items-center text-blue-400 hover:text-blue-500">
                    <CreditCard className="h-16 w-16 mb-2"/>
                    <span>paypal.me/emmyjuanita</span>
                </a>
            </div>
        </div>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onClose} className="border-white text-white hover:bg-white/10">
            <X className="mr-2 h-4 w-4" /> Cerrar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentModal;