import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Mobile_tower from "@/components/Mobile_tower";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Top_header from "@/components/Top_header";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {

  return (
    <>
    {/* <Top_header/> */}
    <Header />
    <Navbar />
    <Banner/>
    <Brands/>
    <Services />
    <Partners/>
    <Projects/>
    
        {/* <Contact/> */}


    <Mobile_tower/>
    </>
  );
}
