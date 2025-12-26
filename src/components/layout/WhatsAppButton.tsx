import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919620555694";
  const message = encodeURIComponent("Hello! I'd like to know more about Sundarban Child Campus.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
}
