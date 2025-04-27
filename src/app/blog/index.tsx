export default function Blog() {
    const posts = [
      {
        title: "How I Built My Portfolio with Next.js",
        summary: "An overview of my process building a portfolio site with modern tech stack.",
      },
      {
        title: "Why TypeScript Is a Game Changer",
        summary: "A quick look at the benefits of TypeScript for frontend and backend devs.",
      },
      {
        title: "Mastering Tailwind CSS",
        summary: "Tips, tricks, and techniques to level up your Tailwind skills.",
      },
    ];
  
    return (
      <section className="min-h-screen px-8 py-16 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-11">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-200 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }