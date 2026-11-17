"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
// FIREBASE
import { db, collection, getDocs } from "../../firebase";
// CONSTANTS
import { theme, pages } from "../../lib/constants";
// IMAGES
import depo1 from "../../public/depo-1.jpeg";
import depo2 from "../../public/depo-2.jpeg";
import depo3 from "../../public/depo-3.jpeg";
import depo4 from "../../public/depo-4.jpg";
import logobw from "../../public/cartesyum-logo-bw.png";

const testProduct = {
  id: "imagens-sacras-test",
  nome: "Imagens sacras",
  tipo: "Produto teste",
  imagem: "/portfolio-imagens-sacras-test.jpeg",
};

const additionalProducts = [
  {
    id: "decoracao-natal",
    nome: "Decoração de Natal",
    tipo: "Decoração",
    imagem: "/portfolio-decoracao-natal.jpeg",
  },
  {
    id: "peca-industrial-asa",
    nome: "Peça industrial em ASA",
    tipo: "Peça industrial",
    imagem: "/portfolio-peca-industrial-asa.jpeg",
  },
  {
    id: "trofeu-personalizado",
    nome: "Troféu personalizado",
    tipo: "Personalizado",
    imagem: "/portfolio-trofeu-personalizado.jpeg",
  },
  {
    id: "decoracao-recem-nascido",
    nome: "Decoração para recém nascido",
    tipo: "Decoração",
    imagem: "/portfolio-decoracao-recem-nascido.jpeg",
  },
  {
    id: "chaveiros-personalizados",
    nome: "Chaveiros personalizados",
    tipo: "Acessório",
    imagem: "/portfolio-chaveiros-personalizados.jpeg",
  },
  {
    id: "platinas-militares",
    nome: "Platinas militares",
    tipo: "Personalizado",
    imagem: "/portfolio-platinas-militares.jpeg",
  },
  {
    id: "cortador-de-biscoito",
    nome: "Cortador de biscoito",
    tipo: "Utensílio",
    imagem: "/portfolio-cortador-de-biscoito.jpeg",
  },
  {
    id: "artigos-cosplay",
    nome: "Artigos de Cosplay",
    tipo: "Cosplay",
    imagem: "/portfolio-artigos-cosplay.jpeg",
  },  {
    id: "busto-feminino",
    nome: "Busto feminino",
    tipo: "Decoração",
    imagem: "/portfolio-busto-feminino.jpeg",
  },  {
    id: "funko-pop",
    nome: "Funko Pop",
    tipo: "Miniatura",
    imagem: "/portfolio-funko-pop.jpeg",
  },  {
    id: "peca-de-reposicao",
    nome: "Peça de reposição",
    tipo: "Peça",
    imagem: "/portfolio-peca-de-reposicao.jpeg",
  },  {
    id: "logo-de-mesa-incendiados",
    nome: "Logo de Mesa",
    tipo: "Logo",
    imagem: "/portfolio-logo-de-mesa-incendiados.jpeg",
  },  {
    id: "mascara-de-cosplay",
    nome: "Máscara de Cosplay",
    tipo: "Cosplay",
    imagem: "/portfolio-mascara-cosplay.jpeg",
  },  {
    id: "miniatura-personalizada",
    nome: "Miniatura",
    tipo: "Miniatura",
    imagem: "/portfolio-miniatura-personalizada.jpeg",
  },  {
    id: "medalhas",
    nome: "Medalhas",
    tipo: "Premiação",
    imagem: "/portfolio-medalhas.jpeg",
  },  {
    id: "pecas-flexiveis",
    nome: "Peças flexíveis",
    tipo: "Peça",
    imagem: "/portfolio-pecas-flexiveis.jpeg",
  },  {
    id: "brasao-romu",
    nome: "Brasão ROMU",
    tipo: "Brasão",
    imagem: "/portfolio-brasao-romu.jpeg",
  },  {
    id: "suporte-de-maquina",
    nome: "Suporte de máquina",
    tipo: "Suporte",
    imagem: "/portfolio-suporte-de-maquina.jpeg",
  },  {
    id: "personagens-de-rpg",
    nome: "Personagens de RPG",
    tipo: "Miniaturas",
    imagem: "/portfolio-personagens-rpg.jpeg",
  },  {
    id: "placa-profissional",
    nome: "Placa Profissional",
    tipo: "Placa",
    imagem: "/portfolio-placa-profissional.jpeg",
  },  {
    id: "miniatura-casamento",
    nome: "Miniatura de casamento",
    tipo: "Miniatura",
    imagem: "/portfolio-miniatura-casamento.jpeg",
  },  {
    id: "letreiro-humanize",
    nome: "Letreiro",
    tipo: "Letreiro",
    imagem: "/portfolio-letreiro-humanize.jpeg",
  },  {
    id: "souvenir-hockey",
    nome: "Souvenir hockey",
    tipo: "Souvenir",
    imagem: "/portfolio-souvenir-hockey.jpeg",
  },  {
    id: "platina-forcas-armadas",
    nome: "Platina Forças Armadas",
    tipo: "Institucional",
    imagem: "/portfolio-platina-forcas-armadas.jpeg",
  },  {
    id: "brasao-corpo-de-bombeiros",
    nome: "Brasão do Corpo de Bombeiros",
    tipo: "Brasão",
    imagem: "/portfolio-brasao-corpo-bombeiros.jpeg",
  },  {
    id: "letras-caixa",
    nome: "Letras caixa",
    tipo: "Letreiro",
    imagem: "/portfolio-letras-caixa.jpeg",
  },  {
    id: "logo-de-mesa-rdk",
    nome: "Logo de mesa",
    tipo: "Logo",
    imagem: "/portfolio-logo-de-mesa-rdk.jpeg",
  },  {
    id: "miniatura-brigitte-bardot",
    nome: "Miniatura Brigitte Bardot",
    tipo: "Miniatura",
    imagem: "/portfolio-miniatura-brigitte-bardot.jpeg",
  },
  {
    id: "frases-biblicas",
    nome: "Frases bíblicas",
    tipo: "Decoração",
    imagem: "/portfolio-frases-biblicas.jpeg",
  },
  {
    id: "funko-pop-profissional",
    nome: "Funko Pop",
    tipo: "Miniatura",
    imagem: "/portfolio-funko-pop-profissional.jpeg",
  },
  {
    id: "miniatura-lutador",
    nome: "Miniatura Lutador",
    tipo: "Miniatura",
    imagem: "/portfolio-miniatura-lutador.jpeg",
  },
  {
    id: "peca-moto-sem",
    nome: "Peça de moto",
    tipo: "Peça",
    imagem: "/portfolio-peca-moto-sem.jpeg",
  },
  {
    id: "trofeu-tenis",
    nome: "Troféu de tênis",
    tipo: "Troféu",
    imagem: "/portfolio-trofeu-tenis.jpeg",
  },
  {
    id: "chaveiro-logo",
    nome: "Chaveiro",
    tipo: "Acessório",
    imagem: "/portfolio-chaveiro-logo.jpeg",
  },
  {
    id: "porta-guardanapo",
    nome: "Porta-guardanapo",
    tipo: "Decoração",
    imagem: "/portfolio-porta-guardanapo.jpeg",
  },
  {
    id: "miniatura-medico",
    nome: "Miniatura médico",
    tipo: "Miniatura",
    imagem: "/portfolio-miniatura-medico.jpeg",
  },
  {
    id: "miniatura-cr7",
    nome: "Miniatura CR7",
    tipo: "Miniatura",
    imagem: "/portfolio-miniatura-cr7.jpeg",
  },
  {
    id: "peca-moto-flange",
    nome: "Peça de moto",
    tipo: "Peça",
    imagem: "/portfolio-peca-moto-flange.jpeg",
  },
  {
    id: "carimbo-argila-fria",
    nome: "Carimbo de argila fria",
    tipo: "Ferramenta",
    imagem: "/portfolio-carimbo-argila-fria.jpeg",
  },
  {
    id: "mostrador-livros-lidos",
    nome: "Mostrador de livros lidos",
    tipo: "Decoração",
    imagem: "/portfolio-mostrador-livros-lidos.jpeg",
  },
  {
    id: "arte-sacra-pomba",
    nome: "Arte sacra",
    tipo: "Arte sacra",
    imagem: "/portfolio-arte-sacra-pomba.jpeg",
  },
  {
    id: "chaveiro-abridor",
    nome: "Chaveiro abridor de garrafa",
    tipo: "Acessório",
    imagem: "/portfolio-chaveiro-abridor-garrafa.jpeg",
  },
  {
    id: "funko-pop-tatiana",
    nome: "Funko Pop",
    tipo: "Miniatura",
    imagem: "/portfolio-funko-pop-tatiana.jpeg",
  },
  {
    id: "mascote-branding-3d",
    nome: "Mascote Branding 3D",
    tipo: "Mascote",
    imagem: "/portfolio-mascote-branding-3d.jpeg",
  },
  {
    id: "pecas-veleiro",
    nome: "Peças de veleiro",
    tipo: "Peça náutica",
    imagem: "/portfolio-pecas-veleiro.jpeg",
  },
];

const hiddenProductNames = new Set([
  "display de letras",
  "modelos decorativos",
  "pecas de substituicao",
  "chaveiro personalizado",
  "chaveiro de times",
]);

const normalizeProductName = (name = "") =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
function ImageDialog({ isOpen, setIsOpen, imageSrc, altText }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 /d/ flex items-center justify-center /s/ bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="lg:hidden block absolute z-60 top-3 right-3 /s/ text-zinc-50 hover:text-zinc-700 transition"
      >
        <X className="w-8 h-8" />
      </button>
      <div
        className="relative p-3 lg:py-4 /w/ max-w-3xl w-[92%] md:w-[80%] lg:w-[65%] /s/ bg-white backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="hidden lg:block absolute z-60 top-3 right-3 /s/ text-zinc-500 hover:text-zinc-700 transition"
        >
          <X className="w-8 h-8" />
        </button>
        {/*Photo*/}
        <div className="relative /w/ w-full h-130 lg:h-[80vh] /d/ flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={altText || "Imagem"}
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [products, setProducts] = useState([testProduct, ...additionalProducts]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const portfolioRef = collection(db, "portfolio");
        const portfolioSnapshot = await getDocs(portfolioRef);
        const portfolioList = portfolioSnapshot.docs.map((post) => ({
          id: post.id,
          ...post.data(),
        }));
        const visiblePortfolioList = portfolioList.filter(
          (item) => !hiddenProductNames.has(normalizeProductName(item.nome))
        );
        setProducts([...visiblePortfolioList, testProduct, ...additionalProducts]);
      } catch (error) {
        console.error("Erro ao buscar items:", error);
      }
    };
    fetchAllItems();
  }, []);

  const firstRowProducts = products.filter((_, index) => index % 2 === 0);
  const secondRowProducts = products.filter((_, index) => index % 2 === 1);
  const renderProductCard = (item, duplicate = false) => (
    <div
      key={`${item.id}-${item.imagem}-${duplicate ? "duplicate" : "original"}`}
      className={`portfolio-marquee-item p-3 md:p-4 h-[27rem] md:h-[31rem] flex flex-col shadow-sm bg-white rounded-xl border ${theme.borderCard} hover:border-red-500 hover:shadow-md hover:shadow-red-200 transition-shadow cursor-pointer`}
      aria-hidden={duplicate ? "true" : undefined}
      onClick={() => {
        setSelectedImage(item.imagem);
        setIsOpen(true);
      }}
    >
      <div className="relative mb-4 w-full h-[21rem] md:h-96 rounded-lg overflow-hidden">
        <Image
          src={item.imagem}
          alt={duplicate ? "" : item.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="oxanium mb-1 text-xl md:text-2xl font-medium text-stone-800">
          {item.nome}
        </h3>
        <p
          className={`oxanium px-2 pt-1 pb-0.5 font-semibold w-fit rounded-md text-sm text-white italic tracking-wider ${theme.bgAccent}`}
        >
          {item.tipo}
        </p>
      </div>
    </div>
  );
  return (
    <div className="mb-16 /w/ w-full /d/ flex items-center justify-center">
      {products.length ? (
        <div className="lg:w-[92%] w-[95%] flex flex-col gap-5">
          {[firstRowProducts, secondRowProducts].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="portfolio-marquee"
              role="region"
              aria-label={`Linha ${rowIndex + 1} de produtos do portfólio`}
            >
              <div className={`portfolio-marquee-track ${rowIndex === 1 ? "portfolio-marquee-reverse" : ""}`}>
                {row.map((item) => renderProductCard(item))}
                {row.map((item) => renderProductCard(item, true))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="oxanium my-5 /t/ text-red-600 text-lg">
          Carregando...
        </div>
      )}
      {/*Dialog for spread photo*/}
      <ImageDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imageSrc={selectedImage}
        altText="Imagem ampliada"
      />
    </div>
  );
}

function page() {
  const testimonials = [
    {
      name: "Anderson S.",
      date: "11/04/2025",
      text: "Mas todo mundo elogio, ficou melhor que o original. O original só tem um encaixe, igual ao primeiro só um encaixe fininho esse aí eu consegui fazer um suporte por trás que ele apoio e um reforço na frente certinho também",
      color: "bg-blue-400",
      productPhoto: depo1,
    },
    {
      name: "Rômulo A.",
      date: "07/08/2025",
      text: "Precisei de uma impressão em 3D, uma peça veio faltando para montagem de uma arara de roupas comprada pela internet. mandei mensagem num sábado a noite (totalmente fora do horário comercial) mas fui muito bem atendido e o mesmo se prontificou a entregar em 40 minutos, disse que buscaria só no dia seguinte  DOMINGO e mais uma vez fui bem recebi e a peça estava pronta totalmente funcional. Estou muito satisfeito e recomendo os serviços. Obrigado!",
      color: "bg-green-400",
      productPhoto: depo2,
    },
    {
      name: "Matheus B.",
      date: "20/06/2025",
      text: "Muito top o trabalho , pedi um suporte pra o ps5 horizontal fico show de bola , sem contar o atendimento que é fora da curva.",
      color: "bg-yellow-400",
      productPhoto: depo3,
    },
    {
      name: "Sarah O.",
      date: "14/09/2025",
      text: "Fiz diversos itens personalizados para o meu casamento, porta guardanapo com o monograma do nosso casamento, mini cavaletes para serem usados como suporte para centro de mesas e fotos decorativas. Além de ter feito uma miniatura super realista do meu cachorro para colocar no nosso topo de bolo. Os detalhes e a qualidade são surpreendentes, o preço é justo e o atendimento é muito bom! Com certeza iremos contactar quando quisermos fazer algo personalizado novamente.",
      color: "bg-purple-400",
      productPhoto: depo4,
    },
  ];

  return (
    <section
      className={`pt-28 lg:pt-34 /s/ ${theme.bgStandard} /t/ text-black`}
    >
      <Header currentPage={pages.PORTFOLIO} />
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-no-repeat opacity-3 hue-rotate-90 saturate-200"
        style={{
          backgroundImage: `url(${logobw.src})`,
          backgroundSize: "17rem",
          backgroundPosition: "right 4rem top 2rem",
        }}
      ></div>
      <div className="px-4 z-10 /d/ lg:flex lg:flex-col lg:items-center">
        {/*Título Portfolio*/}
        <div className="mb-12 /t/ text-center">
          <div
            className={`orbitron mb-6 /t/ text-4xl md:text-5xl font-bold ${theme.textBrand}`}
          >
            Nossos Produtos
          </div>
          <p className="oxanium text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Conheça alguns dos projetos incríveis que já realizamos para nossos
            clientes
          </p>
        </div>
        {/*Portfolio*/}
        <Portfolio />
        {/*Título Depoimentos*/}
        <div className="mb-14 lg:mb-16 /t/ text-center">
          <h2
            className={`orbitron mb-6 /t/ text-4xl md:text-5xl font-bold ${theme.textBrand}`}
          >
            Depoimentos
          </h2>
          <p className="oxanium text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Veja alguns relatos de clientes do nosso trabalho
          </p>
        </div>
        {/*Depoimentos*/}
        <div className="mb-16 lg:mb-20 /w/ w-full /d/ flex flex-col items-center justify-center">
          <div className="gap-6 /w/ w-[90%] /d/ grid grid-cols-1 sm:grid-cols-2">
            {testimonials.map((depo, index) => (
              <div
                key={index}
                className="py-6 px-7 gap-x-1 /d/ flex flex-col sm:flex-row items-start /s/ bg-white rounded-xl shadow-sm border-1 border-stone-300"
              >
                {/* Foto do cliente */}
                <div
                  className={`oxanium pt-0.5 /w/ w-10 h-10 lg:w-15 lg:h-15 /d/ flex flex-col items-center justify-center /s/ ${depo.color} rounded-full text-white font-semibold text-xl`}
                >
                  {depo.name.charAt(0)}
                </div>
                {/* Conteúdo principal */}
                <div className="sm:ml-4 mt-3 sm:mt-0 flex-1">
                  <div className="oxanium mb-2 /t/ text-stone-700 text-md italic /d/ flex">
                    <p>“{depo.text}”</p>
                  </div>
                  <div className="oxanium /t/ font-medium text-stone-900">
                    {depo.name}
                  </div>
                  <div className="text-xs text-stone-500 mb-3">{depo.date}</div>
                  {/* Foto do produto */}
                  {depo.productPhoto && (
                    <div className="relative w-fit /s/ rounded-lg overflow-hidden border border-stone-100">
                      <Image
                        src={depo.productPhoto}
                        alt={`Produto comentado por ${depo.name}`}
                        height={400}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*Footer*/}
      <Footer />
    </section>
  );
}

export default page;
