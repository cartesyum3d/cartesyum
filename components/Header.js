"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Menu, X, Phone, Mail, Instagram, Youtube } from "lucide-react";
import cartesyumLogo from "../public/Cartesyum_logo_texto.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { theme, pages } from "../lib/constants";

function Header({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", link: "/", page: pages.HOME },
    { label: "Serviços", link: "servicos", page: pages.SERVICES },
    { label: "Portfólio", link: "portfolio", page: pages.PORTFOLIO },
    { label: "Sobre nós", link: "sobre", page: pages.ABOUT },
    { label: "Perguntas Frequentes", link: "faq", page: pages.FAQ },
  ];

  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  };

  return (
    <header className="oxanium fixed top-0 left-0 right-0 z-50 /s/ bg-[#fdfcf2f0] backdrop-blur-sm border-b border-red-900/20">
      <div className="container mx-auto px-4 lg:w-[92%]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 1 Logo */}
          <div className="flex-shrink-0">
            <Image
              src={cartesyumLogo}
              alt="Cartesyum Logo"
              className="h-10 lg:h-12 w-auto transition-smooth hover:scale-105 cursor-pointer"
              onClick={() => goTo("/")}
            />
          </div>

          {/* 2 Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              if (currentPage && currentPage == item.page) {
                return (
                  <button
                    key={item.label}
                    onClick={() => goTo(item.link)}
                    className={`font-[700] ${theme.textBrand} ${theme.hoverTextSecondary} transition-smooth`}
                  >
                    {item.label}
                  </button>
                );
              } else {
                return (
                  <button
                    key={item.label}
                    onClick={() => goTo(item.link)}
                    className={`font-[500] ${theme.textStandard} ${theme.hoverTextSecondary} transition-smooth`}
                  >
                    {item.label}
                  </button>
                );
              }
            })}
          </nav>

          {/* 3 Desktop Contacts & Socials */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-3 ${theme.textAccent}`}>
              <a
                href="https://wa.me/5522992068674"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span className={`text-sm font-medium`}>WhatsApp</span>
              </a>
              <span>•</span>
              <a
                href="mailto:cartesyum@gmail.com"
                className={`flex items-center space-x-1 transition-smooth`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
            <div className={`flex items-center space-x-2 ml-4 ${theme.textBrand}`}>
              <a
                href="https://www.instagram.com/cartesyum/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                <Instagram className="w-5.5" />
              </a>
              <a
                href="https://www.youtube.com/@Cartesyum"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                <Youtube className="w-9" />
              </a>
            </div>
          </div>

          {/* 4 Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item.link)}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <a
                  href="https://wa.me/5522992068674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:text-primary transition-smooth py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:cartesyum@gmail.com"
                  className="flex items-center space-x-2 text-accent hover:text-primary transition-smooth py-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href="https://www.instagram.com/cartesyum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Cartesyum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
