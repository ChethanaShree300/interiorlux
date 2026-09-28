function Services() {
  const services = [
    {
      number: "01",
      title: "Residential Interiors",
      description:
        "We design warm, elegant and functional homes that reflect your personality and the way you live.",
    },
    {
      number: "02",
      title: "Living Room Design",
      description:
        "From statement TV units to lighting, furniture and wall treatments, we create living spaces that feel refined and welcoming.",
    },
    {
      number: "03",
      title: "Bedroom Interiors",
      description:
        "Create a peaceful and comfortable bedroom with carefully selected materials, colours, lighting and custom storage.",
    },
    {
      number: "04",
      title: "Custom TV Units",
      description:
        "We design custom TV walls and entertainment units that combine storage, lighting and aesthetics.",
    },
    {
      number: "05",
      title: "False Ceiling & Lighting",
      description:
        "Thoughtfully planned ceilings and lighting transform the mood, depth and character of your interiors.",
    },
    {
      number: "06",
      title: "Custom Woodwork",
      description:
        "From wall panels and partitions to storage and furniture, we create custom woodwork tailored to your space.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* ================= HERO ================= */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-10">

          <div className="max-w-3xl">

            <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-6">
              WHAT WE OFFER
            </p>

            <h1 className="text-5xl md:text-6xl font-serif leading-tight text-[#222222] mb-8">
              Spaces designed
              <br />
              around <span className="text-[#C99A3D]">you.</span>
            </h1>

            <p className="text-[#555555] text-lg leading-8 max-w-2xl">
              From concept to completion, we create beautiful and functional
              spaces designed around your lifestyle, personality and vision.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="bg-[#EFECE5] py-20">

        <div className="max-w-7xl mx-auto px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.number}
                className="
                  bg-[#F8F6F1]
                  p-10
                  min-h-[300px]
                  border border-[#E5E1D8]
                  hover:-translate-y-2
                  transition duration-300
                "
              >

                <span className="text-[#C99A3D] text-sm tracking-[0.2em]">
                  {service.number}
                </span>

                <h2 className="text-2xl font-serif text-[#222222] mt-6 mb-5">
                  {service.title}
                </h2>

                <p className="text-[#666666] leading-7">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-10 text-center">

          <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-5">
            START YOUR PROJECT
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#222222] mb-6">
            Have a space in mind?
          </h2>

          <p className="text-[#666666] text-lg leading-8 mb-10">
            Tell us about your space and your ideas. Let's create an
            interior that feels truly yours.
          </p>

          <a
            href="/contact"
            className="
              inline-block
              bg-[#D2A84C]
              text-[#1A1A1A]
              px-8 py-4
              rounded-md
              hover:bg-[#C99A3D]
              transition
            "
          >
            Get In Touch →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Services;