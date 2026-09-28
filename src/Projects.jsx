function Projects() {
  const projects = [
    {
      title: "Elegant Living Room",
      category: "Residential Interiors",
      image: "/projects/project-1.jpg",
    },
    {
      title: "Contemporary Living Space",
      category: "Residential Interiors",
      image: "/projects/project-2.jpg",
    },
    {
      title: "Statement Partition",
      category: "Residential Interiors",
      image: "/projects/project-3.jpg",
    },
    {
      title: "Warm Wood TV Wall",
      category: "Residential Interiors",
      image: "/projects/project-4.jpg",
    },
    {
      title: "Refined Living Area",
      category: "Residential Interiors",
      image: "/projects/project-5.jpg",
    },
    {
      title: "Modern Lounge",
      category: "Residential Interiors",
      image: "/projects/project-6.jpg",
    },
    {
      title: "Contemporary TV Unit",
      category: "Residential Interiors",
      image: "/projects/project-7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-4">
              OUR WORK
            </p>

            <h1 className="text-5xl md:text-6xl font-serif text-[#222222] mb-6">
              Spaces we've transformed.
            </h1>

            <p className="text-[#666666] text-lg leading-8 max-w-2xl mx-auto">
              Explore a selection of our interior design work, from detailed
              TV walls and living spaces to warm, contemporary interiors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.image}
                className="group bg-white overflow-hidden"
              >
                <div className="h-[420px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[#C99A3D] text-xs tracking-[0.2em] mb-3">
                    {project.category}
                  </p>

                  <h2 className="text-2xl font-serif text-[#222222]">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
