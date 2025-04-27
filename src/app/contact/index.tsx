import React from 'react'

const Contact = () => {
    return (
        <section className="bg-black text-white px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300"
            >
              Send Message
            </button>
          </form>
        </section>
      );
}

export default Contact





