import whatsappIcon from "../public/whatsapp-icon.png";
import Image from "next/image";
// import { MessageCircle } from "lucide-react";

export default function FloatingWpp() {
  return (
    <a
      href="https://wa.me/5522999160594"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-2 z-20 fixed right-8 bottom-8 /s/ bg-[#2AB316] hover:shadow-green-400/50 text-white rounded-full shadow-lg transition-all duration-300"
    >
      <Image src={whatsappIcon} alt="WhatsApp" className="w-15 h-15 m-0 group-hover:w-17 group-hover:h-17 transition-all duration-300" />
    </a>
  );
}
