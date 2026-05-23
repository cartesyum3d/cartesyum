"use client";
import {
  Printer,
  Box,
  Layers,
  ArrowRight,
  FlagTriangleRight,
} from "lucide-react";
// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Button } from "../../components/Button";
import { Card, CardContent } from "../../components/Card";
// CONSTANTS
import { theme, pages } from "../../lib/constants";
// IMAGES
import cartesyumLogo from "../../public/cartesyum-logo.png";
import logobw from "../../public/cartesyum-logo-bw.png";

import x3dprintera from "../../public/3d-printer-a.png";
import housea from "../../public/house-a.png";
import ara from "../../public/ar-a.png";

const ServicesPage = () => {
  const services = [
    {
      icon: (
        <Image src={x3dprintera} alt={`logo`} className="w-11 object-cover" />
      ),
      title: "Impressão 3D - FDM",
      description:
        "A impressão 3D por FDM (Fused Deposition Modeling) é uma tecnologia que constrói objetos camada por camada através do aquecimento e deposição de filamento plástico. Oferecemos impressões de alta qualidade com diversos materiais como PLA, PETG, TPU e ABS/ASA, ideais para protótipos, peças funcionais e objetos decorativos.",
      features: [
        "Múltiplos materiais disponíveis",
        "Precisão dimensional excepcional",
        "Acabamento profissional",
        "Prazos ágeis de entrega",
      ],
    },
    {
      icon: <Image src={housea} alt={`logo`} className="w-12 object-cover" />,
      title: "Modelagem 3D",
      description:
        "Oferecemos serviços completos de modelagem 3D, transformando suas ideias em modelos digitais prontos para impressão. Nossa equipe especializada utiliza softwares profissionais como SolidWorks e Fusion 360 para criar modelos técnicos precisos e otimizados para manufatura aditiva.",
      features: [
        "Modelagem técnica profissional",
        "Otimização para impressão 3D",
        "Prototipagem virtual",
        "Documentação técnica completa",
      ],
    },
    {
      icon: (
        <Image
          src={ara}
          alt={`logo`}
          className="w-11 object-cover rounded-lg"
        />
      ),
      title: "Realidade Aumentada",
      description:
        "Somos especialistas em Realidade Aumentada aplicada à Impressão 3D. Desenvolvemos modelos 3D precisos que podem ser visualizados no ambiente real, em escala correta, antes mesmo de iniciar a impressão. Com a RA, você consegue ver o objeto impresso no local onde ele será usado, avaliar proporções, encaixes e impacto visual, reduzindo erros, retrabalho e desperdício de material.",
      features: [
        "Serviço completo end-to-end",
        "Consultoria especializada",
        "Iteração e refinamento",
        "Garantia de qualidade",
      ],
    },
  ];
  /*1/? ServicesPage -- conteúdo escrito em objetos*/

  return (
    <section
      className={`pt-28 lg:pt-34 /s/ ${theme.bgStandard} /t/ text-black`}
    >
      <Header currentPage={pages.SERVICES} />
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-no-repeat opacity-3 hue-rotate-90 saturate-200"
        style={{
          backgroundImage: `url(${logobw.src})`,
          backgroundSize: "17rem",
          backgroundPosition: "right 4rem top 2rem",
        }}
      ></div>
      <div className="px-4 z-10 /d/ lg:flex lg:flex-col lg:items-center">
        {/*Título Serviços*/}
        <div className="mb-14 /t/ text-center">
          <h2
            className={`orbitron mb-6 /t/ text-4xl md:text-5xl font-bold ${theme.textBrand}`}
          >
            Nossos Serviços
          </h2>
          <p className="oxanium text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Soluções completas em impressão e modelagem 3D para transformar suas
            ideias em realidade
          </p>
        </div>
        {/*Título Serviços*/}
        <div className="gap-8 /w/ lg:w-[90%] /d/ grid lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`z-10 group transition-smooth ${theme.borderCard} hover:shadow-red-500 hover:border-red-500/50 rounded-xl h-full`}
            >
              <CardContent className="p-8 /w/ h-full /d/ flex flex-col">
                <div className="mb-6 /d/ flex items-center">
                  <div
                    className={`w-16 h-16 /d/ flex items-center justify-center /s/ rounded-xl bg-red-100 ${theme.textBrand} group-hover:bg-red-300 group-hover:text-zinc-50 transition-smooth`}
                  >
                    {service.icon}
                  </div>
                </div>
                <div
                  className={`orbitron font-semibold ${theme.textBrand} mb-4 text-[1.35rem]`}
                >
                  {service.title}
                </div>
                <div className="oxanium mb-5 leading-relaxed flex-grow /d/ flex flex-col items-center">
                  <div>{service.description}</div>
                </div>
                <div className="oxanium mb-7 /d/ flex flex-col justify-center border-0 border-amber-500">
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="gap-1.5 /d/ flex items-center"
                      >
                        <div
                          className={`w-5 h-5 rounded-full ${theme.textAccent}`}
                        >
                          <FlagTriangleRight className="w-full h-full" />
                        </div>
                        <span className="font-semibold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  className={`oxanium /w/ w-full /s/ border-0 ${theme.bgOffwhite} group-hover:bg-red-700 group-hover:text-white transition-smooth`}
                >
                  <a
                    href="https://wa.me/5522992068674"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-2"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/*Extra Message -- Services*/}
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
              Projeto Personalizado?
            </div>
            <p
              className={`oxanium mb-3 /t/ text-red-950 text-lg leading-relaxed`}
            >
              Possui um projeto específico em mente? Nossa equipe está pronta
              para criar soluções personalizadas que atendam exatamente às suas
              necessidades. Entre em contato e vamos discutir como podemos dar
              vida às suas ideias!
            </p>
            <Button
              variant="cta"
              size="lg"
              className="rounded-lg bg-red-100 text-red-800 /hover/ hover:bg-red-700 hover:text-white transition-smooth"
              onClick={() =>
                window.open("https://wa.me/5522992068674", "_blank")
              }
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ServicesPage;
