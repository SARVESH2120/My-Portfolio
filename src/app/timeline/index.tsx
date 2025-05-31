

import { useEffect, useRef } from "react"
import { motion, type Variants } from "framer-motion"
import { Briefcase, GraduationCap, Code, Building, BookOpen } from "lucide-react"
import { twMerge } from "tailwind-merge"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Timeline data structure
const timelineData = [
  {
    id: 1,
    period: "2016 - 2017",
    title: "High School",
    description: "Completed high school education with focus on science and mathematics",
    type: "education",
    icon: GraduationCap,
  },
  {
    id: 2,
    period: "2017 - 2018",
    title: "Intermediate",
    description: "Pursued intermediate education with specialization in science stream",
    type: "education",
    icon: BookOpen,
  },
  {
    id: 3,
    period: "2018 - 2019",
    title: "JEE Preparation",
    description: "Dedicated time for JEE preparation to pursue engineering",
    type: "education",
    icon: BookOpen,
  },
  {
    id: 4,
    period: "2019 - 2023",
    title: "B.Tech in Electronics and Communication",
    description: "Earned Bachelor's degree in Electronics and Communication Engineering",
    type: "education",
    icon: GraduationCap,
  },
  {
    id: 5,
    period: "2023 - 2025",
    title: "Internship Phase",
    description: "Gained practical experience through multiple internships",
    type: "work",
    icon: Briefcase,
    subItems: [
      {
        id: "5a",
        company: "Ducat",
        role: "Java Full Stack Developer Trainee",
        duration: "6 months",
        icon: Code,
      },
      {
        id: "5b",
        company: "Chetu",
        role: "Intern",
        duration: "3 months",
        icon: Building,
      },
      {
        id: "5c",
        company: "Acutech Solution Pvt Limited",
        role: "Intern",
        duration: "3 months",
        icon: Building,
      },
      {
        id: "5d",
        company: "AST Consulting",
        role: "Intern",
        duration: "3 months",
        icon: Building,
      },
      {
        id: "5e",
        company: "Register Karo",
        role: "Intern",
        duration: "3 months",
        icon: Building,
      },
    ],
  },
  {
    id: 6,
    period: "2025 - Present",
    title: "Tech Mahindra",
    description: "Working as a professional at Tech Mahindra",
    type: "work",
    icon: Briefcase,
  },
]

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const subItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the timeline line
    if (timelineRef.current) {
      gsap.fromTo(
        ".timeline-line",
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="timeline-line absolute left-4 sm:left-1/2 sm:ml-[-1px] top-0 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 h-full z-0" />

      <motion.div className="relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0
          const isEducation = item.type === "education"

          return (
            <motion.div key={item.id} variants={itemVariants} className="mb-12">
              <div className="flex flex-col sm:flex-row">
                {/* Timeline content - alternating sides on desktop */}
                <div
                  className={twMerge(
                    "relative sm:w-1/2 pl-12 sm:pl-0 pb-8",
                    isEven ? "sm:pr-12 sm:text-right" : "sm:order-last sm:pl-12",
                  )}
                >
                  {/* Mobile dot */}
                  <div className="absolute left-0 top-2 sm:hidden">
                    <div className={`p-1.5 rounded-full ${isEducation ? "bg-purple-500" : "bg-pink-500"}`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className={`p-6 rounded-lg shadow-lg ${
                      isEducation ? "bg-purple-900/40" : "bg-pink-900/40"
                    } border ${
                      isEducation ? "border-purple-700" : "border-pink-700"
                    } backdrop-blur-sm hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        isEducation ? "bg-purple-700/50 text-purple-200" : "bg-pink-700/50 text-pink-200"
                      }`}
                    >
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>

                    {/* Sub-items for internships */}
                    {item.subItems && (
                      <motion.div
                        className="mt-4 space-y-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.3,
                            },
                          },
                        }}
                      >
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400">
                          Internship Experience
                        </h4>
                        {item.subItems.map((subItem) => (
                          <motion.div
                            key={subItem.id}
                            variants={subItemVariants}
                            className={`flex items-center gap-2 p-3 rounded-md ${
                              isEven ? "sm:flex-row-reverse sm:text-right" : "flex-row text-left"
                            } bg-slate-800/50 border border-slate-700`}
                          >
                            <div className="p-1 rounded-full bg-slate-700 flex-shrink-0">
                              <subItem.icon className="w-3 h-3 text-slate-300" />
                            </div>
                            <div className={isEven ? "sm:mr-2" : "ml-2"}>
                              <p className="font-medium text-sm">{subItem.company}</p>
                              <p className="text-xs text-slate-400">
                                {subItem.role} · {subItem.duration}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Center dot - visible only on desktop */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className={`p-2 rounded-full ${
                      isEducation ? "bg-purple-500" : "bg-pink-500"
                    } shadow-lg shadow-purple-500/20`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.2, duration: 0.5, type: "spring" }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden sm:block sm:w-1/2 ${!isEven && "sm:order-first"}`} />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
