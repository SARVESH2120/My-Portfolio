"use client";
import React from "react";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import profile from "../../../public/ProfileImg.webp";
// import { FaReact, FaNodeJs, FaCss3Alt, FaJs } from "react-icons/fa";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const About = () => {
  // const words = ["SDE", "Developer", "Engineer"];
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hover-word",
        { opacity: 0, y: -30 },
        {
          opacity: 50,
          y: 0,
          stagger: 1.5,
          repeat: -1,
          yoyo: true,
          duration: 90,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // const skills = [
  //   {
  //     name: "React",
  //     icon: <FaReact className="text-blue-400 text-5xl" />,
  //     bg: "bg-blue-950",
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: <FaJs className="text-blue-300 text-5xl" />,
  //     bg: "bg-blue-800",
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: <FaCss3Alt className="text-teal-400 text-5xl" />,
  //     bg: "bg-gray-900",
  //   },
  //   {
  //     name: "Node.js",
  //     icon: <FaNodeJs className="text-green-400 text-5xl" />,
  //     bg: "bg-green-800",
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: <FaJs className="text-yellow-400 text-5xl" />,
  //     bg: "bg-black",
  //   },
  // ];

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden px-6"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0.8, y: -40 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          <span className="inline-flex items-center ">
            Hey, I am Sarvesh Gupta <Plane size={48} strokeWidth={2} />
          </span>{" "}
        </motion.h1>

        {/* Profile Image with Gradient Glow */}
        <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 animate-border">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-black shadow-4xl animate-border ">
            <Image
              className="rounded-3xl  "
              src={profile}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Grid Layout for Skills & About */}
        <div className="  max-w-4xl w-full mt-6 ml-6">
          {/* Swiper Cards */}
          <div className="w-full">
            {/* <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="h-80"
            >
              {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`flex flex-col items-center justify-center gap-4 p-6 rounded-2xl ${skill.bg} h-full shadow-2xl transition-transform hover:scale-105 duration-300`}
                  >
                    {skill.icon}
                    <h4 className="text-xl font-bold text-white">
                      {skill.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>

          {/* About Me Card */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">About Me</h3>
            <p className="text-gray-300 leading-relaxed flex text-shadow-2xs text-start">
              Frontend-focused Full-Stack Developer with 1+ year of hands-on
              experience through internships and real-world projects using
              React.js, Next.js, Node.js, and MySQL. Proficient in building
              scalable web applications, RESTful APIs, and intuitive user
              interfaces. Strong understanding of modern development workflows,
              version control, and performance optimization. .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* Animated Background Words */
}
//   <div className="absolute inset-0 flex items-start justify-center flex-wrap gap-8 text-[8vw] font-bold opacity-10 whitespace-nowrap pointer-events-none">
//   {words.map((word, idx) => (
//     <span
//       key={idx}
//       className="hover-word"
//       style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
//     >
//       {word}
//     </span>
//   ))}
// </div>
