// export default function Projects() {
//     const projects = [
//       {
//         title: "Portfolio Website",
//         description: "A modern developer portfoli built with Next.js and Tailwind CSS.",
//       },
//       {
//         title: "Task Tracker App",
//         description: "Full-stack productivity app with drag-and-drop and dark mode.",
//       },
//       {
//         title: "E-commerce Platform",
//         description: "Responsive and fast e-commerce site with Stripe integration.",
//       },
//     ];
  
//     return (
//       <section className="min-h-screen px-8 py-16 bg-black text-white">
//         <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
//             >
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-300">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  



// 'use client';

// import { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// // import { CardStackIcon } from '@radix-ui/react-icons'; // optional

// const projects = [
//   {
//     title: 'Elite Connect',
//     description: 'Networking platform for professionals.',
//   },
//   {
//     title: 'Interview Genie',
//     description: 'Mock interview platform with AI.',
//   },
//   {
//     title: 'Virtual Deal Room',
//     description: 'Real-time investment collaboration tool.',
//   },
// ];

// export default function StackedProjects() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cards = gsap.utils.toArray('.project-card') as HTMLElement[];

//     cards.forEach((card, i) => {
//       gsap.set(card, {
//         zIndex: cards.length - i,
//         y: i * 10,
//         scale: 1 - i * 0.02,
//       });

//       card.addEventListener('click', () => {
//         cards.forEach((c, j) => {
//           if (c === card) {
//             gsap.to(c, {
//               y: 0,
//               scale: 1,
//               duration: 0.3,
//               zIndex: cards.length,
//             });
//           } else {
//             gsap.to(c, {
//               y: (j + 1) * 10,
//               scale: 1 - (j + 1) * 0.02,
//               zIndex: cards.length - j - 1,
//               duration: 0.3,
//             });
//           }
//         });
//       });
//     });
//   }, []);

//   return (
//     <section className="py-12 bg-gray-900 text-white" id="projects">
//       <div className="container mx-auto px-4 text-center mb-10">
//         <h2 className="text-4xl font-bold mb-2">Projects</h2>
//         <p className="text-gray-400">Click a card to bring it to front</p>
//       </div>

//       <div
//         ref={containerRef}
//         className="relative h-[400px] flex items-center justify-center"
//       >
//         {projects.map((project, i) => (
//           <div
//             key={i}
//             className="project-card absolute w-[300px] h-[200px] bg-white text-black shadow-2xl rounded-2xl p-6 cursor-pointer transition-all"
//           >
//             <h3 className="text-xl font-semibold">{project.title}</h3>
//             <p className="text-sm mt-2">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }












'use client';

import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button"; 
import elite from "../../../public/eliteconnect.webp"
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "",
      description: "Elite Connect is a premium networking platform designed to connect top-tier professionals, entrepreneurs, and investors. It features seamless messaging, curated profiles, and intelligent match-making to foster meaningful business relationships.",
      image: elite,
      url: "https://yourportfolio.com",
    },
    {
      title: "Task Tracker App",
      description: "Full-stack productivity app with drag-and-drop and dark mode.",
      image: elite,
      url: "https://tasktracker.com",
    },
    {
      title: "E-commerce Platform",
      description: "Responsive and fast e-commerce site with Stripe integration.",
      image: elite,
      url: "https://ecommerceplatform.com",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-black text-white">
      <motion.h2 
        className="text-4xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl overflow-hidden relative group"
          >
            <Image
            width={25}
            height={10}
              src={project.image} 
              alt={project.title} 
              className="w-full object-cover rounded-2xl mb-6 transition-all"
            />
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className="w-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-400 transition-all">
                Visit Project
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
