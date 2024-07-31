import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mobile_tower from "@/components/Mobile_tower";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Brands/>
    <Services/>
    <Partners/>
    <Projects/>
    <Mobile_tower/>
    <Footer/>
    </>
  );
}
