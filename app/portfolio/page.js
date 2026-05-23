"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
// FIREBASE
import { db, collection, getDocs } from "../../firebase";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// CONSTANTS
import { theme, pages } from "../../lib/constants";
// IMAGES
import depo1 from "../../public/depo-1.jpeg";
import depo2 from "../../public/depo-2.jpeg";
import depo3 from "../../public/depo-3.jpeg";
import depo4 from "../../public/depo-4.jpg";
import logobw from "../../public/cartesyum-logo-bw.png";

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
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const portfolioRef = collection(db, "portfolio");
        const portfolioSnapshot = await getDocs(portfolioRef);
        if (!portfolioSnapshot.empty) {
          const portfolioList = portfolioSnapshot.docs.map((post) => ({
            id: post.id,
            ...post.data(),
          }));
          setProducts(portfolioList);
        }
      } catch (error) {
        console.error("Erro ao buscar items:", error);
      }
    };
    fetchAllItems();
  }, []);

  return (
    <div className="mb-16 /w/ w-full /d/ flex items-center justify-center">
      {products.length ? (
        <div className="lg:w-[92%] w-[95%] /s/ border-1 border-stone-500/0">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fcfcfc",
              "--swiper-navigation-size": "2.1rem",
              "--swiper-navigation-sides-offset": "1.3rem",
            }}
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1920: { slidesPerView: 5 },
            }}
            className="!overflow-y-visible"
          >
            <div className="oxanium p-5">
              {products.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`p-4 h-120 /d/ flex flex-col /s/ shadow-sm bg-white rounded-xl border-1 ${theme.borderCard} /hover/ hover:border-red-500 hover:shadow-md hover:shadow-red-200 transition-shadow cursor-pointer`}
                    onClick={() => {
                      setSelectedImage(item.imagem);
                      setIsOpen(true);
                    }}
                  >
                    {/*Photo*/}
                    <div className="relative mb-4 /w/ w-full h-96 /s/ rounded-lg overflow-hidden">
                      <Image
                        src={item.imagem}
                        alt={item.nome}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/*Text*/}
                    <div className="flex flex-col gap-1">
                      <h3 className="oxanium mb-1 /t/ text-2xl font-medium text-stone-800">
                        {item.nome}
                      </h3>
                      <p
                        className={`oxanium px-2 pt-1 pb-0.5 font-semibold w-fit rounded-md text-sm text-white italic tracking-wider ${theme.bgAccent}`}
                      >
                        {item.tipo}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
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
            Nosso Portfólio
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
