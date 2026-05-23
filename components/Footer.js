import { Button } from "../components/Button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import footerLogo from "../public/footer-logo.png";
import instagramIcon from "../public/instagram-icon.png";
import facebookIcon from "../public/facebook-icon.png";
import youtubeIcon from "../public/youtube-icon.png";
import tiktokIcon from "../public/tiktok-icon.png";
import whatsappIcon from "../public/whatsapp-icon.png";
import Image from "next/image";
import { theme } from "../lib/constants";
import { useRouter } from "next/navigation";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      logo: instagramIcon,
      url: "https://www.instagram.com/cartesyum/",
    },
    {
      name: "Facebook",
      logo: facebookIcon,
      url: "https://www.facebook.com/profile.php?id=61586127481717",
    },
    {
      name: "YouTube",
      logo: youtubeIcon,
      url: "https://www.youtube.com/@Cartesyum",
    },
    {
      name: "TikTok",
      logo: tiktokIcon,
      url: "https://www.tiktok.com/@cartesyum",
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefone",
      value: "22 99916-0594",
      link: "tel:+5522992068674",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "cartesyum@gmail.com",
      link: "mailto:cartesyum@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Endereço",
      value: "Rua Rosalina Terra, n 9, Portinho - Cabo Frio - RJ",
      link: "https://goo.gl/maps/6jKwUokYhYr5y8Ue9",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horário",
      value: "Domingo a Domingo | 10h às 18h",
      link: null,
    },
  ];

  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  };

  return (
    <footer className={`oxanium /w/ w-full /s/ text-white ${theme.bgFooter} border-0 border-amber-300`}>
      <div className="container mx-auto px-4 pt-16 pb-10 /w/ w-[92%]">
        <div className="gap-12 /d/ grid lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src={footerLogo}
                alt="Cartesyum Footer Logo"
                className="h-16 w-auto mb-4"
              />
              <p className="text-brand-background/80 font-body leading-relaxed">
                Materializamos suas ideias com impressão 3D de qualidade
                profissional. Transformando conceitos em realidade, camada por
                camada.
              </p>
            </div>
            {/* Social Media */}
            <div>
              <h4 className="orbitron font-bold text-brand-background mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-5.5">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-brand-background/10 transition-smooth"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <Image
                      src={social.logo}
                      alt={social.name}
                      className="w-auto h-7"
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="orbitron font-bold text-brand-background mb-6 text-xl">
              Informações de Contato
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-3">
                  <div className="text-red-400 mt-1">{contact.icon}</div>
                  <div>
                    <h5 className="font-body font-semibold text-brand-background mb-1">
                      {contact.label}
                    </h5>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target={
                          contact.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          contact.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="text-brand-background/80 hover:text-red-400 transition-smooth font-body text-sm"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-brand-background/80 font-body text-sm">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Links and WhatsApp */}
          <div className="lg:col-span-1">
            <h4 className="orbitron font-bold text-brand-background mb-6 text-xl">
              Links Rápidos
            </h4>
            <div className="space-y-3 mb-8">
              {[
                { label: "Início", link: "home" },
                { label: "Serviços", link: "servicos" },
                { label: "Portfólio", link: "portfolio" },
                { label: "Sobre nós", link: "sobre" },
                { label: "FAQ", link: "faq" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item.link)}
                  className="block text-brand-background/80 hover:text-red-400 transition-smooth font-body text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="p-6 /s/ bg-green-600 rounded-xl text-center">
              <div className="mb-2">
                <Image
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-10 h-10 mx-auto"
                />
              </div>
              <h5 className="orbitron text-lg font-bold text-white mb-2.5">
                Fale Conosco
              </h5>
              <p className="text-white/90 font-body text-sm mb-4">
                Tire suas dúvidas ou solicite um orçamento
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="w-full bg-white text-green-600 hover:bg-white/90"
                onClick={() =>
                  window.open("https://wa.me/5522992068674", "_blank")
                }
              >
                <ExternalLink className="w-4 h-4" />
                Abrir WhatsApp
              </Button>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-stone-700 text-stone-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-background/60 font-body text-sm">
              © {new Date().getFullYear()} Cartesyum. Todos os direitos
              reservados.
            </p>
            <p className="text-brand-background/60 font-body text-sm">
              Desenvolvido para revolucionar a impressão 3D
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
