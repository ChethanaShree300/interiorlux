import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";


function Navbar() {
  return (
    <nav className="h-20 bg-[#FAF9F6] text-[#222222] flex items-center px-10 border-b border-[#E5E1D8] relative z-20">

      {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          alt="InteriorLux"
          className="h-16 w-16 object-contain rounded-full"
        />
      </Link>


      {/* Navigation */}
      <div className="ml-auto flex items-center gap-10">

        <Link
          to="/"
          className="hover:text-[#C99A3D] transition"
        >
          Home
        </Link>


        <Link
          to="/about"
          className="hover:text-[#C99A3D] transition"
        >
          About Us
        </Link>


        <Link
          to="/services"
          className="hover:text-[#C99A3D] transition"
        >
          Services
        </Link>


        <Link
          to="/projects"
          className="hover:text-[#C99A3D] transition"
        >
          Projects
        </Link>

      </div>

    </nav>
  );
}



function Home() {
  return (
    <div className="bg-[#F8F6F1] min-h-screen">

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] bg-[#F8F6F1] overflow-hidden">


        {/* Hero Image */}
        <div
          className="
            absolute
            right-0
            top-0
            w-[55%]
            h-full
            overflow-hidden
            [clip-path:ellipse(78%_100%_at_78%_50%)]
          "
        >

          <img
            src="/hero-interior.png"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />

        </div>


        {/* Hero Content */}
        <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">

          <div className="w-full max-w-7xl mx-auto px-10">

            <div className="w-[48%]">

              <p className="text-[#C99A3D] tracking-[0.25em] text-sm mb-6">
                WE DESIGN YOUR DREAM SPACE
              </p>


              <h1 className="text-6xl font-serif leading-tight mb-6 text-[#222222]">

                Transforming Spaces,
                <br />

                Elevating{" "}

                <span className="text-[#C99A3D]">
                  Lives.
                </span>

              </h1>


              <p className="text-[#555555] text-lg leading-8 max-w-xl mb-10">

                At InteriorLux__, we believe every space has the potential
                to be extraordinary. Let us bring your vision to life.

              </p>


              <div className="flex gap-4">

                <Link
                  to="/projects"
                  className="inline-block bg-[#D2A84C] text-[#1A1A1A] px-7 py-4 rounded-md hover:bg-[#C99A3D] transition"
                >
                  Explore Projects →
                </Link>


                <Link
                  to="/services"
                  className="border border-[#C99A3D] text-[#333333] px-7 py-4 rounded-md hover:bg-[#C99A3D] hover:text-white transition"
                >
                  Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;