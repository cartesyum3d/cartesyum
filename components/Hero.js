import { useState, useRef } from "react";
import { Printer } from "lucide-react";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { Card, CardContent } from "../components/Card";
import { Send, ArrowRight } from "lucide-react";
import heroImage1 from "../public/hero-bg-1.jpg";
import heroImage2 from "../public/hero-bg-2.jpg";
import Image from "next/image";
import { theme } from "../lib/constants";
import { useRouter } from "next/navigation";

const MIN_PHONE_LENGTH = 8;

const MAX_LENGTHS = {
  name: 150,
  phone: 20,
  email: 254,
  fileLink: 2048,
  description: 1000,
};

const FORMSUBMIT_AJAX = "https://formsubmit.co/ajax/cartesyum@gmail.com";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fileLink: "",
    description: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [fieldLengthError, setFieldLengthError] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const honeypotRef = useRef(null);
  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldLengthError("");
    if (honeypotRef.current?.value?.trim()) {
      return;
    }
    const tooLong = Object.entries(MAX_LENGTHS).find(
      ([key, max]) => (formData[key]?.length ?? 0) > max,
    );
    if (tooLong) {
      setFieldLengthError(
        `Um dos campos excede o limite de caracteres permitido.`,
      );
      return;
    }
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length < MIN_PHONE_LENGTH) {
      setPhoneError(
        `O telefone deve ter pelo menos ${MIN_PHONE_LENGTH} dígitos.`,
      );
      return;
    }
    setPhoneError("");
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSUBMIT_AJAX, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          fileLink: formData.fileLink || "",
          description: formData.description,
          _subject: "Nova solicitação de orçamento - Cartesyum",
        }),
      });
      const data = await res.json();

      if (data.success === "true" || res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          fileLink: "",
          description: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") setPhoneError("");
    setFieldLengthError("");
    const maxLen = MAX_LENGTHS[name];
    const capped = maxLen != null ? value.slice(0, maxLen) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: capped,
    }));
  };

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
            <h1 className="orbitron mb-6 lg:leading-17.5 /t/ text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-red-50 font-black">
              Materializamos suas ideias,{" "}
              <span className="text-gradient text-red-300">
                camada por camada
              </span>
            </h1>
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
                <a
                  href="https://wa.me/5522992068674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-x-2"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </a>
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

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div
                    className="absolute -left-[9999px] w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
                    aria-hidden="true"
                  >
                    <label htmlFor="company_website">
                      Site da empresa (deixe em branco)
                    </label>
                    <input
                      ref={honeypotRef}
                      type="text"
                      id="company_website"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="name"
                      className="oxanium /t/ text-stone-900 font-medium"
                    >
                      Nome/Empresa
                    </Label>
                    <input
                      type="text"
                      autoComplete="name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome ou empresa"
                      maxLength={MAX_LENGTHS.name}
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
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(99) 99999-9999"
                      autoComplete="tel"
                      maxLength={MAX_LENGTHS.phone}
                      className={`oxanium py-2 px-3 /s/ border-1 rounded-lg text-black bg-[#F6F6DF] transition-smooth duration-300 ${phoneError ? "border-red-500" : "border-lime-950/20"}`}
                      aria-invalid={!!phoneError}
                      aria-describedby={phoneError ? "phone-error" : undefined}
                    />
                    {phoneError && (
                      <p
                        id="phone-error"
                        className="oxanium text-sm text-red-600"
                        role="alert"
                      >
                        {phoneError}
                      </p>
                    )}
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
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      maxLength={MAX_LENGTHS.email}
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
                      maxLength={MAX_LENGTHS.fileLink}
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
                      placeholder="Descreva seu projeto em detalhes..."
                      rows={2}
                      maxLength={MAX_LENGTHS.description}
                      className="oxanium py-2 px-3 /s/ border-1 rounded-lg border-lime-950/20 text-black bg-[#F6F6DF] transition-smooth duration-300"
                    />
                  </div>
                  {fieldLengthError && (
                    <p className="oxanium text-sm text-red-600" role="alert">
                      {fieldLengthError}
                    </p>
                  )}
                  {submitStatus === "success" && (
                    <p
                      className="oxanium text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg py-2 px-3"
                      role="alert"
                    >
                      Obrigado! Sua mensagem foi enviada com sucesso. Entraremos
                      em contato em breve.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p
                      className="oxanium text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg py-2 px-3"
                      role="alert"
                    >
                      Algo deu errado. Tente novamente ou entre em contato pelo
                      WhatsApp.
                    </p>
                  )}
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    disabled={isSubmitting}
                    className={`py-3 /w/ w-full /t/ text-lg ${theme.bgAccent} ${theme.bgAccentHigh} text-white /s/ rounded-lg`}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Solicitação
                      </>
                    )}
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
