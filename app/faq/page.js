"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
// IMAGES
import info from "../../public/bg-info.png";
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
        className="hidden lg:block absolute inset-0 z-0 bg-no-repeat opacity-2 hue-rotate-90 saturate-200"
        style={{
          backgroundImage: `url(${info.src})`,
          backgroundSize: "17rem",
          backgroundPosition: "right 4rem top 2rem",
        }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos de impressão 3D
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="group hover:shadow-brand transition-smooth border-border/50 hover:border-primary/30 bg-card overflow-hidden"
              >
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full p-6 text-left justify-between hover:bg-transparent"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="font-display font-bold text-primary text-lg pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openQuestion === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </Button>

                  {openQuestion === index && (
                    <div className="px-6 pb-6 border-t border-border/30">
                      <p className="text-muted-foreground font-body leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for More Questions */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 border border-border/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-primary mb-4 text-2xl">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida
              específica sobre seu projeto. Entre em contato via WhatsApp ou
              email e teremos prazer em ajudá-lo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cta"
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/5522999160594", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  (window.location.href = "mailto:cartesyum@gmail.com")
                }
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default FAQSection;
