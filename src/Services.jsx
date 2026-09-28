import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* Hero Section */}
      <section className="px-6 sm:px-10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#C99A3D] tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm mb-4">
            WHAT WE OFFER
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#222222] mb-6 leading-tight">
            Spaces designed
            <br />
            around <span className="text-[#C99A3D]">you.</span>
          </h1>

          <p className="text-[#555555] text-base sm:text-lg max-w-2xl leading-relaxed">
            From concept to completion, we create beautiful and functional
            spaces designed around your lifestyle, personality and vision.
          </p>

        </div>
      </section>


      {/* Services Section */}
      <section className="px-6 sm:px-10 py-12 sm:py-16 bg-[#EFEBE3]">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Service 1 */}
            <div className="bg-white border border-[#DDD8CE] p-7 sm:p-10">
              <p className="text-[#C99A3D] text-sm tracking-[0.2em] mb-5">
                01
              </p>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#222222] mb-5">
                Residential Interiors
              </h2>

              <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
                Thoughtfully designed homes that balance elegance,
                functionality and your personal style. From living rooms
                to bedrooms, we create spaces that feel truly yours.
              </p>
            </div>


            {/* Service 2 */}
            <div className="bg-white border border-[#DDD8CE] p-7 sm:p-10">
              <p className="text-[#C99A3D] text-sm tracking-[0.2em] mb-5">
                02
              </p>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#222222] mb-5">
                Living & Dining Spaces
              </h2>

              <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
                Elegant and inviting living and dining areas designed for
                everyday comfort, memorable gatherings and timeless style.
              </p>
            </div>


            {/* Service 3 */}
            <div className="bg-white border border-[#DDD8CE] p-7 sm:p-10">
              <p className="text-[#C99A3D] text-sm tracking-[0.2em] mb-5">
                03
              </p>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#222222] mb-5">
                Custom Interiors
              </h2>

              <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
                Bespoke interiors created around your needs, preferences
                and lifestyle, with careful attention to materials,
                lighting, furniture and details.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="px-6 sm:px-10 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#C99A3D] tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm mb-5">
            START YOUR PROJECT
          </p>

          <h2 className="text-4xl sm:text-5xl font-serif text-[#222222] mb-6 leading-tight">
            Have a space in mind?
          </h2>

          <p className="text-[#555555] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Tell us about your space and your ideas. Let's create an
            interior that feels truly yours.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-[#D5A842] px-8 sm:px-10 py-4 text-base sm:text-lg text-black hover:bg-[#C99A3D] transition"
          >
            Get In Touch →
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Services;