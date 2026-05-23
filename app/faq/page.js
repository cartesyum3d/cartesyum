"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import Image from "next/image";
// IMAGES
import cartesyumLogo from "../../public/cartesyum-logo.png";
import logobw from "../../public/cartesyum-logo-bw.png";
// STYLE
import { theme, pages } from "../../lib/constants";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);
  const faqs = [
    {
      question: "Vocês aceitam parcerias?",
      answer:
        "Sim, aceitamos parcerias estratégicas! Estamos sempre abertos a colaborar com designers, arquitetos, engenheiros, empresas e outros profissionais que possam agregar valor aos nossos serviços. Entre em contato conosco para discutir possibilidades de parceria que beneficiem ambas as partes.",
    },
    {
      question: "Vocês fazem impressão em filamento e resina?",
      answer:
        "No momento, trabalhamos exclusivamente com impressão FDM utilizando filamentos. Esta tecnologia nos permite oferecer peças de excelente qualidade, com variedade de materiais e tamanhos. Estamos constantemente avaliando a expansão para outras tecnologias conforme a demanda do mercado.",
    },
    {
      question: "Qual é o prazo de entrega dos projetos?",
      answer:
        "O prazo varia conforme a complexidade e tamanho do projeto. Impressões simples podem ficar prontas em 1-3 dias úteis, enquanto projetos mais complexos ou que incluem modelagem 3D podem levar de 5-10 dias úteis. Sempre informamos o prazo estimado durante o orçamento.",
    },
    {
      question: "Vocês fazem modelagem 3D personalizada?",
      answer:
        "Sim! Oferecemos serviços completos de modelagem 3D personalizada. Nossa equipe pode criar modelos a partir de sketches, fotos, descrições detalhadas ou até mesmo reverter engenharia de peças existentes. Utilizamos softwares profissionais para garantir precisão e qualidade.",
    },
    {
      question: "Qual é o tamanho máximo de impressão?",
      answer:
        "Nossa impressora Bambu Lab A1 tem volume de impressão de 256 x 256 x 256mm. Para projetos maiores, podemos dividir o modelo em partes menores que se encaixam perfeitamente, ou recomendar alternativas de design que se adequem às limitações técnicas.",
    },
    {
      question: "Vocês oferecem pós-processamento?",
      answer:
        "Sim, oferecemos diversos serviços de pós-processamento como lixamento, pintura, colagem de partes, furação adicional e acabamentos especiais. Estes serviços são orçados separadamente e podem transformar completamente a aparência final do seu projeto.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section
      className={`pt-28 lg:pt-34 relative /s/ ${theme.bgStandard} text-black`}
    >
      <Header currentPage={pages.FAQ} />
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-no-repeat opacity-3 hue-rotate-90 saturate-200"
        style={{
          backgroundImage: `url(${logobw.src})`,
          backgroundSize: "17rem",
          backgroundPosition: "right 4rem top 2rem",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`orbitron text-4xl md:text-5xl font-bold mb-6 ${theme.textBrand}`}
          >
            Perguntas Frequentes
          </h2>
          <p className="oxanium text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos de impressão 3D
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group shadow-gray-400/80 hover:shadow-red-500/60 shadow-sm transition-smooth border-slate-500 overflow-hidden"
            >
              <CardContent className="p-0">
                <Button
                  className="w-full p-6 py-7 md:py-6 text-left justify-between bg-white"
                  onClick={() => toggleQuestion(index)}
                >
                  <div
                    className={`orbitron font-bold text-md lg:text-lg pr-4 ${theme.textBrand} flex-1 min-w-0 break-words whitespace-pre-line`}
                  >
                    {faq.question}
                  </div>
                  <div className="flex-shrink-0">
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </Button>

                {openQuestion === index && (
                  <div className="oxanium px-6 pb-6 border-t bg-white border-slate-200 text-neutral-800">
                    <p className="text-left font-body leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/*Tip Message -- FAQ*/}
        <div className="oxanium my-18 lg:my-24 /s/ text-center">
          <div
            className={`mx-auto py-5 px-8 /w/ max-w-4xl /d/ flex flex-col items-center justify-center /s/ bg-red-50/90 rounded-xl border-3 ${theme.borderSecondary}`}
          >
            <Image
              src={cartesyumLogo}
              alt="Cartesyum"
              className="mb-2 /w/ w-10 /s/ object-cover rounded-lg"
            />
            <h3
              className={`orbitron mb-4 /s/ ${theme.textBrand} font-display font-bold text-primary text-2xl`}
            >
              Ainda tem dúvidas?
            </h3>
            <p className="text-red-950 text-lg leading-relaxed mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida
              específica sobre seu projeto. Entre em contato via WhatsApp ou
              email e teremos prazer em ajudá-lo!
            </p>
            <div className="gap-5 /d/ flex flex-col lg:flex-row justify-center items-center /s/ border-0 border-amber-400">
              <Button
                variant="cta"
                size="lg"
                className="rounded-lg bg-red-100 text-red-800 hover:bg-red-700 hover:text-white transition-smooth gap-2"
                onClick={() =>
                  window.open("https://wa.me/5522992068674", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FAQSection;
