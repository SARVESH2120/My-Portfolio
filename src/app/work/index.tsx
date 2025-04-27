// import React from 'react'

// const Services = () => {
//     const services = ["Web Development", "UI/UX Design", "Backend Solutions"];
//     return (
//       <section className="min-h-screen px-8 py-16 bg-smoke text-black">
//         <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((title, i) => (
//             <div key={i} className="[perspective:1000px]">
//               <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
//                 <div className="absolute w-full h-full backface-hidden bg-black text-white p-6 rounded-xl shadow-md">
//                   <h3 className="text-xl font-bold mb-2">{title}</h3>
//                   <p>High-quality and modern development services.</p>
//                 </div>
//                 <div className="absolute w-full h-full bg-gray-800 text-white p-6 rounded-xl shadow-md transform rotate-y-180 backface-hidden">
//                   <p>
//                     More details about {title}. Custom solutions tailored to your
//                     needs.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
// }

// export default Services






"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

interface CodeChefData {
  rating: number;
  highest_rating: number;
  fully_solved_count: number;
  stars: number;
  currentRating: number;
  highestRating: number;
}

export default function Services() {
  const [leetcode, setLeetcode] = useState<LeetCodeData | null>(null);
  const [codechef, setCodechef] = useState<CodeChefData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const lcRes = await fetch("https://leetcode-stats-api.herokuapp.com/sarveshgupta1808");
      const ccRes = await fetch("https://codechef-api.vercel.app/handle/sarvesh_1808");

      const lcData = await lcRes.json();
      const ccData = await ccRes.json();
      console.log(ccData)

      setLeetcode(lcData);
      setCodechef(ccData);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
      {/* Left Side - Tech Stack */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "Express.js", "Framer Motion"].map((tech) => (
            <span key={tech} className="bg-black dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Coding Journey */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Coding Journey</h2>

        <div className="space-y-6 text-center">
          {/* LeetCode Section */}
          {leetcode && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black dark:bg-gray-800 p-4 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
              <p>Total Solved: <strong>{leetcode.totalSolved}</strong></p>
              <p>Easy: {leetcode.easySolved} | Medium: {leetcode.mediumSolved} | Hard: {leetcode.hardSolved}</p>
            </motion.div>
          )}

          {/* CodeChef Section */}
          {codechef && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black dark:bg-gray-800 p-4 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">CodeChef</h3>
              <p>Rating: <strong>{codechef.rating}</strong> ({codechef.stars} stars)</p>
              <p>Highest Rating: {codechef.highestRating}</p>
              <p>currentRating: {codechef.currentRating}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

  