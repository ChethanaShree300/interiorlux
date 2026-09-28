function About() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* ================= ABOUT HERO ================= */}
      <section className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-[#C99A3D] tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm mb-5 sm:mb-6">
                ABOUT INTERIORLUX__
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-[#222222] mb-6 sm:mb-8">
                Designing spaces
                <br className="hidden sm:block" />
                {" "}that feel{" "}
                <span className="text-[#C99A3D]">
                  like you.
                </span>
              </h1>

              <p className="text-[#555555] text-base sm:text-lg leading-7 sm:leading-8 mb-5 sm:mb-6 max-w-xl">
                InteriorLux__ is an interior design studio dedicated
                to creating beautiful, functional and timeless spaces
                that reflect the people who live and work in them.
              </p>

              <p className="text-[#666666] text-base sm:text-lg leading-7 sm:leading-8 mb-8 sm:mb-10 max-w-xl">
                From the first idea to the final detail, we bring
                together thoughtful design, refined aesthetics and
                practical solutions to transform ordinary spaces
                into extraordinary experiences.
              </p>

              <a
                href="#approach"
                className="
                  inline-block
                  bg-[#D2A84C]
                  text-[#1A1A1A]
                  px-6 sm:px-7
                  py-3.5 sm:py-4
                  rounded-md
                  hover:bg-[#C99A3D]
                  transition
                  text-sm sm:text-base
                "
              >
                Our Approach →
              </a>

            </div>


            {/* RIGHT IMAGE */}
            <div className="relative mt-4 lg:mt-0">

              <div className="h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-sm">

                <img
                  src="/hero-interior.png"
                  alt="InteriorLux Interior Design"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Decorative box */}
              <div
                className="
                  absolute
                  -bottom-4
                  -right-3
                  sm:-bottom-5
                  sm:-right-4
                  lg:-bottom-6
                  lg:-left-6
                  w-20
                  h-20
                  sm:w-28
                  sm:h-28
                  lg:w-32
                  lg:h-32
                  border
                  border-[#C99A3D]
                  pointer-events-none
                "
              ></div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OUR PHILOSOPHY ================= */}
      <section
        id="approach"
        className="bg-[#EFECE5] py-16 sm:py-20"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* SECTION TITLE */}
          <div className="text-center mb-10 sm:mb-14">

            <p className="text-[#C99A3D] tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm mb-3 sm:mb-4">
              OUR PHILOSOPHY
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#222222]">
              Design with purpose.
            </h2>

          </div>


          {/* PHILOSOPHY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

            {/* CARD 1 */}
            <div className="bg-[#F8F6F1] p-7 sm:p-8 lg:p-10">

              <span className="text-[#C99A3D] text-sm tracking-widest">
                01
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-[#222222] mt-4 sm:mt-5 mb-3 sm:mb-4">
                Thoughtful Design
              </h3>

              <p className="text-[#666666] text-sm sm:text-base leading-7">
                Every element has a purpose. We carefully consider
                space, light, materials and movement to create
                interiors that feel natural.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="bg-[#F8F6F1] p-7 sm:p-8 lg:p-10">

              <span className="text-[#C99A3D] text-sm tracking-widest">
                02
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-[#222222] mt-4 sm:mt-5 mb-3 sm:mb-4">
                Timeless Elegance
              </h3>

              <p className="text-[#666666] text-sm sm:text-base leading-7">
                We focus on sophisticated designs that remain
                beautiful beyond changing trends and styles.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="bg-[#F8F6F1] p-7 sm:p-8 lg:p-10">

              <span className="text-[#C99A3D] text-sm tracking-widest">
                03
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-[#222222] mt-4 sm:mt-5 mb-3 sm:mb-4">
                Designed for Living
              </h3>

              <p className="text-[#666666] text-sm sm:text-base leading-7">
                Beauty should never compromise comfort. Our spaces
                are designed around the way you actually live.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;