import { useState } from "react";
import { Printer } from "lucide-react";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { Card, CardContent } from "../components/Card";
// TOAST
import { Send, ArrowRight } from "lucide-react";
// import { useToast } from "../lib/use-toast";
import heroImage1 from "../public/hero-bg-1.jpg";
import heroImage2 from "../public/hero-bg-2.jpg";
import Image from "next/image";
import { theme } from "../lib/constants";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fileLink: "",
    description: "",
  });
  // const { toast } = window.alert("");
  const router = useRouter();

  const toast = (alert) => {
    console.log(alert);
  };
  /**/

  const goTo = (path) => {
    router.push(path);
  };
  /**/

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Solicitação de Orçamento - Cartesyum";
    const body = `
*${subject}*
*Nome/Empresa:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Link de arquivos:* ${formData.fileLink || "Não fornecido"}
*Descrição do modelo:* ${formData.description}
  `.trim();
    const whatsappNumber = "5522999160594";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      body
    )}`;
    window.open(whatsappLink, "_blank");
    toast("Concluído com sucesso");
  };
  /**/

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  /**/

  return (
    <section
      id="home"
      className="relative min-h-screen /d/ flex items-center overflow-hidden"
    >
      {/*Background*/}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-full h-full"
          style={{
            background: "linear-gradient(135deg, #c22623 3%, #E92023 100%)",
          }}
        >
          <Image
            src={heroImage1}
            alt=""
            style={{ mixBlendMode: "screen" }}
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <Image
            src={heroImage2}
            alt=""
            style={{ mixBlendMode: "multiply" }}
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div
            className={`${theme.gradientHero} absolute inset-0 opacity-80`}
          ></div>
        </div>
      </div>
      {/*Hero*/}
      <div className="relative z-10 container mx-auto mt-20 px-4 py-7 /w/ w-[92%]">
        <div className="gap-10 lg:gap-12 /d/ grid lg:grid-cols-2 items-center">
          {/*Left Side*/}
          <div className="text-center lg:text-left">
            <div className="orbitron mb-6 lg:leading-17.5 /t/ text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-red-50 font-black">
              Materializamos suas ideias,{" "}
              <span className="text-gradient text-red-300">
                camada por camada
              </span>
            </div>
            <p className="oxanium mb-8 /t/ text-xl md:text-2xl text-white">
              Transforme seus projetos em realidade com impressão 3D de alta
              qualidade
            </p>
            <div className="gap-5 /d/ flex flex-col sm:flex-row justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="oxanium px-9 py-7 /t/ text-bold text-lg /s/ rounded-xl bg-linear-150 border-1 border-red-800 from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 hover:border-red-900 text-white"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => goTo("portfolio")}
                className="oxanium px-9 py-7 /t/ text-bold text-lg /s/ rounded-xl shadow-glow shadow-white/20 border-white text-white hover:bg-white hover:text-red-700"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
          {/*Right Side*/}
          <div
            id="contact-form"
            className="lg:mb-0 mb-5 /d/ flex justify-center lg:justify-center"
          >
            <Card
              className={`w-full h-full max-w-md /s/ ${theme.borderCard} bg-[#f9f4f4] hover:shadow-red-500 hover:border-red-500/50 rounded-xl shadow-glow border-1 backdrop-blur-sm`}
            >
              <CardContent className="px-6 py-5.25">
                <div className="mb-5.5 text-center">
                  <div
                    className={`oxanium mb-1.5 /t/ text-[1.65rem] tracking-tight leading-8 font-bold ${theme.textBrand}`}
                  >
                    Faça seu modelo ou<br></br> impressão 3D agora mesmo
                  </div>
                  <p className={`oxanium ${theme.textTerciary}`}>
                    Preencha o formulário e receba seu orçamento
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="name"
                      className="oxanium /t/ text-stone-900 font-medium"
                    >
                      Nome/Empresa
                    </Label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome ou empresa"
                      className="oxanium py-2 px-3 /s/ border-1 rounded-lg border-lime-950/20 text-black bg-[#F6F6DF] transition-smooth duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="phone"
                      className="oxanium /t/ text-stone-900 font-medium"
                    >
                      Telefone
                    </Label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(22) 99999-9999"
                      className="oxanium py-2 px-3 /s/ border-1 rounded-lg border-lime-950/20 text-black bg-[#F6F6DF] transition-smooth duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="email"
                      className="oxanium /t/ text-stone-900 font-medium"
                    >
                      Email
                    </Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="oxanium py-2 px-3 /s/ border-1 rounded-lg border-lime-950/20 text-black bg-[#F6F6DF] transition-smooth duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="fileLink"
                      className="oxanium /t/ text-stone-900 font-medium"
                    >
                      Link de arquivos (opcional)
                    </Label>
                    <input
                      id="fileLink"
                      name="fileLink"
                      value={formData.fileLink}
                      onChange={handleChange}
                      placeholder="Link do Google Drive, Dropbox, etc."
                      className="oxanium py-2 px-3 /s/ border-1 rounded-lg border-lime-950/20 text-black bg-[#F6F6DF] transition-smooth duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="description"
                      className="oxanium /t/ text-stone-900 font-medium"
                    >
                      Descrição do modelo
                    </Label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="Descreva seu projeto em detalhes..."
                      rows={2}
                      className="oxanium py-2 px-3 /s/ border-1 rounded-lg border-lime-950/20 text-black bg-[#F6F6DF] transition-smooth duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className={`py-3 /w/ w-full /t/ text-lg ${theme.bgAccent} text-white /s/ rounded-lg`}
                  >
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
