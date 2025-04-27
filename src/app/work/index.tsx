import React from 'react'

const Services = () => {
    const services = ["Web Development", "UI/UX Design", "Backend Solutions"];
    return (
      <section className="min-h-screen px-8 py-16 bg-smoke text-black">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((title, i) => (
            <div key={i} className="[perspective:1000px]">
              <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-black text-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p>High-quality and modern development services.</p>
                </div>
                <div className="absolute w-full h-full bg-gray-800 text-white p-6 rounded-xl shadow-md transform rotate-y-180 backface-hidden">
                  <p>
                    More details about {title}. Custom solutions tailored to your
                    needs.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Services





  