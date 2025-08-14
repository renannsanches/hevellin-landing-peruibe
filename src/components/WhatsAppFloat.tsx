import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5513997640065', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;