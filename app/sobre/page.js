"use client";
import {
  User,
  Settings,
  Package,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import Image from "next/image";
// LIBS
import { useRouter } from "next/navigation";
// IMAGE
import cartesyumLogo from "../../public/cartesyum-logo.png";
import pla from "../../public/pla.png";
import tpu from "../../public/tpu.png";
import petg from "../../public/petg.png";
import abs from "../../public/abs.png";
import logobw from "../../public/cartesyum-logo-bw.png";
import owner from "../../public/owner.jpg";
import bambulabcombosq from "../../public/bambu-lab-combo-sq.jpg";
import plareel from "../../public/pla-reel.jpg";
// STYLE
import { theme, pages } from "../../lib/constants";

const AboutSection = () => {
  const aboutSections = [
    {
      reverse: false,
      photo: owner,
      icon: <User className="w-8 h-8" />,
      title: "Quem somos?",
      content:
        "Prazer, me chamo Marcos e sou o fundador da Cartesyum. Apaixonado por tecnologia e inovação, criei esta empresa para democratizar o acesso à impressão 3D de qualidade. Nossa missão é transformar ideias em realidade, oferecendo soluções personalizadas para cada cliente, seja um hobbyista iniciante ou uma empresa em busca de protótipos profissionais.",
    },
    {
      reverse: true,
      photo: bambulabcombosq,
      icon: <Settings className="w-8 h-8" />,
      title: "Equipamentos",
      content:
        "Na Cartesyum, contamos com a impressora FDM Bambu Lab A1, uma das mais avançadas do mercado. Este equipamento de última geração oferece precisão excepcional, velocidade otimizada e confiabilidade comprovada. Com tecnologia de auto-calibração e sistema de controle inteligente, garantimos consistência e qualidade em cada impressão realizada.",
    },
    {
      reverse: false,
      photo: plareel,
      icon: <Package className="w-8 h-8" />,
      title: "Principais Materiais FDM",
      content:
        "Trabalhamos com uma ampla variedade de materiais para atender diferentes necessidades: PLA (ideal para iniciantes e protótipos), PETG (resistente e transparente), TPU (flexível para aplicações especiais), e ABS/ASA (duráveis para peças funcionais). Cada material é cuidadosamente selecionado para garantir os melhores resultados em seus projetos.",
    },
  ];

  const materials = [
    {
      name: "PLA",
      description: "Fácil impressão, biodegradável",
      color: "bg-green-500",
      src: pla,
    },
    {
      name: "PETG",
      description: "Resistente, transparente",
      color: "bg-blue-500",
      src: petg,
    },
    {
      name: "TPU",
      description: "Flexível, durável",
      color: "bg-purple-500",
      src: tpu,
    },
    {
      name: "ABS/ASA",
      description: "Resistente à UV",
      color: "bg-red-500",
      src: abs,
    },
  ];

  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  };

  return (
    <section
      className={`pt-28 lg:pt-34 relative /s/ ${theme.bgStandard} text-black`}
    >
      <Header currentPage={pages.ABOUT} />
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-no-repeat opacity-3 hue-rotate-90 saturate-200"
        style={{
          backgroundImage: `url(${logobw.src})`,
          backgroundSize: "17rem",
          backgroundPosition: "right 4rem top 2rem",
        }}
      ></div>
      <div className="relative mx-auto px-4 z-10 /w/ md:w-[86%] lg:w-[82%]">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            className={`orbitron text-4xl md:text-5xl font-bold mb-6 ${theme.textBrand}`}
          >
            Sobre a Cartesyum
          </h2>
          <p className="oxanium text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Conheça nossa história, equipamentos e a paixão que move nosso
            trabalho
          </p>
        </div>
        {/* Cards de seções */}
        <div className="mb-20 /d/ flex flex-col gap-8">
          {aboutSections.map((section, index) => (
            <Card
              key={section.title}
              className={`group w-full h-full /s/ transition-smooth hover:shadow-red-500 hover:border-red-500/50 border border-stone-300 rounded-xl bg-white`}
            >
              <CardContent className={`py-7 px-7 lg:py-8 lg:px-10 gap-7 /w/ h-full /d/ flex flex-col ${section.reverse ? `lg:flex-row-reverse` : `lg:flex-row`} rounded-xl`}>
                <div className="relative /w/ w-full h-70 lg:h-[40vh] /d/ flex items-center justify-center rounded-xl border-1 border-neutral-200">
                  <Image
                    src={section.photo}
                    alt={"imagem"}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
                <div className={`flex flex-col justify-start ${section.reverse ? `items-end` : `items-start`}`}>
                  <div
                    className={`orbitron mb-4 /t/ text-2xl font-bold ${theme.textBrand} ${section.reverse ? `text-right` : `text-left`}`}
                  >
                    {section.title}
                  </div>
                  <p className={`oxanium text-lg text-gray-700 leading-relaxed flex-grow ${section.reverse ? `text-right` : `text-left`}`}>
                    {section.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/*Materiais*/}
        <div className="mb-24">
          <h3
            className={`orbitron mb-12 /t/ font-bold text-3xl text-center ${theme.textBrand}`}
          >
            Materiais Disponíveis
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <Card
                key={material.name}
                className="group transition-smooth hover:shadow-red-500 hover:border-red-500/50 border border-stone-300 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto mb-5 /w/ w-14 h-14 ${material.color} rounded-xl group-hover:scale-110 transition-bounce /d/ flex items-center justify-center`}
                  >
                    <Image
                      src={material.src}
                      alt="Cartesyum"
                      className="w-[70%] invert object-contain"
                    />
                  </div>
                  <h4
                    className={`orbitron font-semibold mb-2 text-lg ${theme.textBrand}`}
                  >
                    {material.name}
                  </h4>
                  <p className="oxanium text-sm text-gray-600">
                    {material.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Tip Message -- Sobre*/}
        <div className="oxanium my-18 lg:my-24 /s/ text-center">
          <div
            className={`mx-auto py-5 px-8 /w/ max-w-4xl /d/ flex flex-col items-center justify-center /s/ bg-red-50/90 rounded-xl border-3 ${theme.borderSecondary}`}
          >
            <Image
              src={cartesyumLogo}
              alt="Cartesyum"
              className="mb-2 /w/ w-10 /s/ object-cover rounded-lg"
            />
            <div
              className={`orbitron mb-4 /s/ ${theme.textBrand} font-display font-bold text-primary text-2xl`}
            >
              Nosso Compromisso com a Qualidade
            </div>
            <p className="text-red-950 text-lg leading-relaxed mb-6">
              Na Cartesyum, cada projeto é tratado com o máximo cuidado e
              atenção aos detalhes. Desde a análise inicial até a entrega final,
              garantimos que seu projeto atenda às suas expectativas e siga os
              mais altos padrões de qualidade do mercado.
            </p>
            <div className="gap-5 /d/ flex flex-col lg:flex-row justify-center items-center /s/ border-0 border-amber-400">
              <Button
                variant="cta"
                size="lg"
                className="rounded-lg bg-red-100 text-red-800 hover:bg-red-700 hover:text-white transition-smooth"
                onClick={() => goTo("/")}
              >
                Começar Projeto
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="lg:self-end /w/ px-5 h-11 /s/ border-1 border-red-700 text-red-700 /hover/ hover:text-red-700 hover:border-red-600 hover:bg-red-200/70 transition-smooth"
                onClick={() => goTo("/servicos")}
              >
                Ver Serviços
              </Button>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </section>
  );
};

export default AboutSection;
