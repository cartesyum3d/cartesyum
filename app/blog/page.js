"use client";
import { Newspaper } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../components/Card";
import { pages, theme } from "../../lib/constants";
import logobw from "../../public/cartesyum-logo-bw.png";

export default function BlogPage() {
  return (
    <section className={`pt-28 lg:pt-34 relative ${theme.bgStandard} text-black`}>
      <Header currentPage={pages.BLOG} />
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-no-repeat opacity-3 hue-rotate-90 saturate-200"
        style={{
          backgroundImage: `url(${logobw.src})`,
          backgroundSize: "17rem",
          backgroundPosition: "right 4rem top 2rem",
        }}
      />
      <main className="relative z-10 container mx-auto px-4 pb-20">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className={`oxanium mb-3 font-semibold uppercase tracking-[0.18em] ${theme.textAccent}`}>
            Blog Cartesyum
          </p>
          <h1 className={`orbitron mb-6 text-4xl font-bold md:text-5xl ${theme.textBrand}`}>
            Atualidades da impressão 3D
          </h1>
          <p className="oxanium mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
            Um espaço para compartilhar conteúdos e atualidades sobre impressão 3D.
          </p>
        </div>
        <Card className={`mx-auto max-w-4xl ${theme.borderCard} bg-white`}>
          <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
            <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-red-100 ${theme.textBrand}`}>
              <Newspaper className="h-8 w-8" />
            </div>
            <h2 className={`orbitron mb-3 text-2xl font-semibold ${theme.textBrand}`}>
              Novos conteúdos em breve
            </h2>
            <p className="oxanium max-w-2xl text-lg leading-relaxed text-gray-700">
              Esta página será atualizada com publicações sobre as novidades e os temas atuais da impressão 3D.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </section>
  );
}