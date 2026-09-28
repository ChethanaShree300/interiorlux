function About() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* ================= ABOUT HERO ================= */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-10">

          <div className="grid grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-6">
                ABOUT INTERIORLUX__
              </p>

              <h1 className="text-6xl font-serif leading-tight text-[#222222] mb-8">
                Designing spaces
                <br />
                that feel{" "}
                <span className="text-[#C99A3D]">
                  like you.
                </span>
              </h1>

              <p className="text-[#555555] text-lg leading-8 mb-6 max-w-xl">
                InteriorLux__ is an interior design studio dedicated
                to creating beautiful, functional and timeless spaces
                that reflect the people who live and work in them.
              </p>

              <p className="text-[#666666] text-lg leading-8 mb-10 max-w-xl">
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
    px-7 py-4
    rounded-md
    hover:bg-[#C99A3D]
    transition
  "
>
  Our Approach →
</a>

            </div>


            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="h-[520px] overflow-hidden rounded-sm">

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
                  -bottom-6
                  -left-6
                  w-32
                  h-32
                  border
                  border-[#C99A3D]
                  -z-0
                "
              ></div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OUR PHILOSOPHY ================= */}
     <section
  id="approach"
  className="bg-[#EFECE5] py-20"
>

        <div className="max-w-7xl mx-auto px-10">

          <div className="text-center mb-14">

            <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-4">
              OUR PHILOSOPHY
            </p>

            <h2 className="text-4xl font-serif text-[#222222]">
              Design with purpose.
            </h2>

          </div>


          <div className="grid grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-[#F8F6F1] p-10">

              <span className="text-[#C99A3D] text-sm tracking-widest">
                01
              </span>

              <h3 className="text-2xl font-serif text-[#222222] mt-5 mb-4">
                Thoughtful Design
              </h3>

              <p className="text-[#666666] leading-7">
                Every element has a purpose. We carefully consider
                space, light, materials and movement to create
                interiors that feel natural.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="bg-[#F8F6F1] p-10">

              <span className="text-[#C99A3D] text-sm tracking-widest">
                02
              </span>

              <h3 className="text-2xl font-serif text-[#222222] mt-5 mb-4">
                Timeless Elegance
              </h3>

              <p className="text-[#666666] leading-7">
                We focus on sophisticated designs that remain
                beautiful beyond changing trends and styles.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="bg-[#F8F6F1] p-10">

              <span className="text-[#C99A3D] text-sm tracking-widest">
                03
              </span>

              <h3 className="text-2xl font-serif text-[#222222] mt-5 mb-4">
                Designed for Living
              </h3>

              <p className="text-[#666666] leading-7">
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