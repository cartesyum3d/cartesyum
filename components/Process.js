import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
// COMPONENTS
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import Image from "next/image";
// CONSTANTS
import { theme } from "../lib/constants";
// IMAGES
import talking from "../public/talking.png";
import modeling from "../public/3d-modeling.png";
import printing from "../public/3d-printing.png";
import finishing from "../public/brush.png";
import delivering from "../public/package.png";
import cartesyumLogo from "../public/cartesyum-logo.png";
import makerworldLogo from "../public/makerworld-logo.png";
import printablesLogo from "../public/printables-logo.webp";
import thingiverseLogo from "../public/thingiverse.jpg";
import cults3dLogo from "../public/cults.png";

const ProcessSection = () => {
  const workflowSteps = [
    { name: "Corel Draw", description: "Design vetorial e layouts" },
    { name: "SolidWorks", description: "Modelagem 3D profissional" },
    { name: "Bambu Studio", description: "Preparação para impressão" },
    { name: "Illustrator", description: "Ilustrações e gráficos" },
    { name: "Fusion 360", description: "CAD paramétrico avançado" },
    { name: "Orca Slicer", description: "Otimização de impressão" },
  ];

  const resources = [
    {
      name: "MakerWorld",
      logo: makerworldLogo,
      url: "https://makerworld.com/pt/3d-models",
      description:
        "Plataforma oficial da Bambu Lab com modelos de alta qualidade",
    },
    {
      name: "Printables",
      logo: printablesLogo,
      url: "https://www.printables.com/model",
      description: "Comunidade Prusa com milhares de modelos gratuitos",
    },
    {
      name: "Thingiverse",
      logo: thingiverseLogo,
      url: "https://www.thingiverse.com/",
      description: "A maior biblioteca de modelos 3D do mundo",
    },
    {
      name: "Cults3D",
      logo: cults3dLogo,
      url: "https://cults3d.com/pt",
      description: "Marketplace com modelos únicos e premium",
    },
  ];

  return (
    <section className="gradient-section">
      <div className="py-12 lg:py-16 px-2 lg:px-4 gap-y-5 lg:gap-y-10 /d/ flex flex-col">
        {/* Título Processo */}
        <div className="px-2 /t/ text-center">
          <h2
            className={`orbitron mb-6 /t/ text-4xl md:text-5xl font-display font-bold ${theme.textBrand}`}
          >
            Nosso Processo
          </h2>
          <p className="oxanium mx-auto /w/ max-w-3xl /t/ text-xl font-body">
            Utilizamos as melhores ferramentas do mercado para garantir
            qualidade e precisão em cada projeto
          </p>
        </div>
        {/* Processo */}
        <div className="mt-4 mb-2 /w/ w-full /d/ flex items-center justify-center /test/ border-0 border-amber-500">
          <div className="relative gap-2.5 mx-0 px-0 md:px-4 lg:px-6 xl:px-10 /w/ w-full /d/ flex flex-wrap justify-center /test/ border-0 border-cyan-500">
            {[
              { img: talking, label: "Atendimento" },
              { img: modeling, label: "Modelagem" },
              { img: printing, label: "Impressão 3D" },
              { img: finishing, label: "Acabamentos" },
              { img: delivering, label: "Entrega" },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="
                    p-1 gap-5 /d/ flex flex-col items-center justify-center
                    /s/ bg-white shadow-sm rounded-xl border-1 border-stone-300
                    aspect-square
                    w-[45%] sm:w-[45%] md:w-[28%] lg:w-[13%]
                    max-w-[180px] md:max-w-[200px] lg:max-w-[220px]
                  "
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    className="w-16 lg:w-20 h-auto"
                  />
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={`orbitron /w/ w-5.5 xs:w-6 lg:w-7 h-5.5 xs:h-6 lg:h-7 /d/ flex items-center justify-center /s/ rounded-full ${theme.bgBrand} /t/ text-white text-md sm:text-lg`}
                    >
                      {index + 1}
                    </div>
                    <div className="oxanium /t/ font-semibold xs:text-md sm:text-lg text-center truncate">
                      {item.label}
                    </div>
                  </div>
                </div>
                {item.label !== "Entrega" && (
                  <div className="hidden lg:flex flex-col items-center justify-center">
                    <ArrowRight className={`w-8 h-8 ${theme.textAccent}`} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <section className="pt-20 pb-24 bg-[#f9f9e4]">
        <div className="mx-auto px-4">
          <div className="mb-16 /t/ text-center">
            <h2
              className={`orbitron mb-6 /t/ text-4xl md:text-5xl font-bold ${theme.textBrand}`}
            >
              Sites para achar seu modelo ideal
            </h2>
            <p className="oxanium /t/ text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Explore as melhores plataformas para encontrar modelos 3D
              incríveis para seus projetos
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="gap-6 /w/ lg:max-w-[92%] /d/ grid md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <Card
                  key={resource.name}
                  className="group oxanium /s/ border-1 border-stone-300 bg-white /hover/ transition-smooth hover:border-red-500 cursor-pointer"
                  onClick={() => window.open(resource.url, "_blank")}
                >
                  <CardContent className="h-full">
                    <div className="pt-6 gap-3 /w/ h-full /d/ flex flex-col justify-between items-center /t/ text-center">
                      <div className="gap-2.5 /d/ flex flex-col justify-center items-center">
                        <div
                          className={`gap-1 /w/ w-14 h-14 /d/ flex items-center justify-center /s/ rounded-lg ${
                            resource.name === "MakerWorld"
                              ? "border-1 border-black/10"
                              : resource.name === "Printables"
                                ? "border-1 border-orange-500/25"
                                : ""
                          }`}
                        >
                          <Image
                            src={resource.logo}
                            alt={`${resource.name} Logo`}
                            className="w-full object-cover rounded-lg"
                          />
                        </div>
                        <div
                          className={`pt-1 /t/ font-bold text-xl ${theme.textBrand}`}
                        >
                          {resource.name}
                        </div>
                        <div className="text-sm leading-relaxed">
                          {resource.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/*Extra Message -- Process*/}
          <div className="oxanium mt-18 lg:mt-24 /s/ text-center">
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
                Dica Profissional
              </div>
              <p
                className={`oxanium mb-3 /t/ text-red-950 text-lg leading-relaxed`}
              >
                Não encontrou o modelo perfeito? Nossa equipe pode criar um
                modelo 3D personalizado especialmente para seu projeto. Entre em
                contato conosco para saber mais sobre nossos serviços de
                modelagem 3D customizada!
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
      </section>
    </section>
  );
};

export default ProcessSection;
