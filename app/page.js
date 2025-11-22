"use client";
// import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FloatingWpp from "../components/FloatingWpp";
import Process from "../components/Process";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Process />
      <Footer />
      <FloatingWpp />
    </>
  );
}
