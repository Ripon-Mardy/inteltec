'use client'
import { useState } from "react";

import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Mobile_tower from "@/components/Mobile_tower";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Top_header from "@/components/Top_header";
import Navbar from "@/components/Navbar";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const handleContactClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Top_header/>
    <Header  />
    <Navbar handleContact={handleContactClick} />
    <Brands/>
    <Services/>
    <Partners/>
    <Projects/>
    {
      isOpen && (
        <Contact handleContactClose={handleContactClick} />
      )
    }
    <Mobile_tower/>
    </>
  );
}
