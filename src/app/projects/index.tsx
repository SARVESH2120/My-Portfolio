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
  



'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
// import { CardStackIcon } from '@radix-ui/react-icons'; // optional

const projects = [
  {
    title: 'Elite Connect',
    description: 'Networking platform for professionals.',
  },
  {
    title: 'Interview Genie',
    description: 'Mock interview platform with AI.',
  },
  {
    title: 'Virtual Deal Room',
    description: 'Real-time investment collaboration tool.',
  },
];

export default function StackedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card') as HTMLElement[];

    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: cards.length - i,
        y: i * 10,
        scale: 1 - i * 0.02,
      });

      card.addEventListener('click', () => {
        cards.forEach((c, j) => {
          if (c === card) {
            gsap.to(c, {
              y: 0,
              scale: 1,
              duration: 0.3,
              zIndex: cards.length,
            });
          } else {
            gsap.to(c, {
              y: (j + 1) * 10,
              scale: 1 - (j + 1) * 0.02,
              zIndex: cards.length - j - 1,
              duration: 0.3,
            });
          }
        });
      });
    });
  }, []);

  return (
    <section className="py-12 bg-gray-900 text-white" id="projects">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400">Click a card to bring it to front</p>
      </div>

      <div
        ref={containerRef}
        className="relative h-[400px] flex items-center justify-center"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card absolute w-[300px] h-[200px] bg-white text-black shadow-2xl rounded-2xl p-6 cursor-pointer transition-all"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
