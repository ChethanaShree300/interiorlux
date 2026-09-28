function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F6F1] px-10 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-5xl font-serif text-[#222222] mb-6">
            Let's Create Something Beautiful.
          </h1>

          <p className="text-[#555555] text-lg max-w-2xl leading-8">
            Have a project in mind? We'd love to hear about your space,
            your ideas and how we can bring your vision to life.
          </p>
        </div>


        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <a
            href="mailto:interioluxs@gmail.com"
            className="bg-white p-10 border border-[#E5E1D8] hover:border-[#C99A3D] transition"
          >
            <p className="text-[#C99A3D] tracking-widest text-sm mb-4">
              EMAIL
            </p>

            <h2 className="text-2xl font-serif text-[#222222] mb-3">
              interioluxs@gmail.com
            </h2>

            <p className="text-[#666666]">
              Click to send us an email →
            </p>
          </a>


          {/* WhatsApp */}
          <a
            href="https://wa.me/2345678945"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-10 border border-[#E5E1D8] hover:border-[#C99A3D] transition"
          >
            <p className="text-[#C99A3D] tracking-widest text-sm mb-4">
              WHATSAPP
            </p>

            <h2 className="text-2xl font-serif text-[#222222] mb-3">
              7483091570
            </h2>

            <p className="text-[#666666]">
              Message us on WhatsApp →
            </p>
          </a>

        </div>


        {/* Consultation */}
        <div className="mt-16 bg-[#EFECE5] p-12 text-center">

          <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-4">
            START YOUR PROJECT
          </p>

          <h2 className="text-4xl font-serif text-[#222222] mb-6">
            Ready to transform your space?
          </h2>

          <a
            href="mailto:interioluxs@gmail.com?subject=InteriorLux%20Consultation"
            className="inline-block bg-[#D2A84C] text-[#1A1A1A] px-8 py-4 rounded-md hover:bg-[#C99A3D] transition"
          >
            Book a Consultation →
          </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;