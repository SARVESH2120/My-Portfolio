"use client"

// import Image from "next/image";
import About from "./about";
import Navbar from "./navbar";
import Contact from "./contact";
import Services from "./work";
import Projects from "./projects";
import Blog from "./blog";
// import ImageSlider from "./slider";
// import ScrollTriggered from "./motio";

export default function Home() {
  return (
<main  className="min-h-screen bg-black text-white font-sans">
  <Navbar/>
  <About/>
  <Projects/>
  <Services/>
  <Blog/>
  {/* <ScrollTriggered/> */}
  {/* <ImageSlider/> */}
  <Contact/>
</main>
  );
}
