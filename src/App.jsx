import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";


/* =========================
   NAVBAR
========================= */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="h-20 bg-[#FAF9F6] text-[#222222] flex items-center px-5 sm:px-10 border-b border-[#E5E1D8] relative z-50">

      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img
          src="/logo.png"
          alt="InteriorLux"
          className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-full"
        />
      </Link>


      {/* Desktop Navigation */}
      <div className="hidden md:flex ml-auto items-center gap-8 lg:gap-10">

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

        <Link
          to="/contact"
          className="hover:text-[#C99A3D] transition"
        >
          Contact
        </Link>

      </div>


      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden ml-auto text-3xl text-[#222222] focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-[#E5E1D8] shadow-md md:hidden">

          <div className="flex flex-col px-6 py-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="py-3 border-b border-[#E5E1D8] hover:text-[#C99A3D] transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="py-3 border-b border-[#E5E1D8] hover:text-[#C99A3D] transition"
            >
              About Us
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="py-3 border-b border-[#E5E1D8] hover:text-[#C99A3D] transition"
            >
              Services
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="py-3 border-b border-[#E5E1D8] hover:text-[#C99A3D] transition"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="py-3 hover:text-[#C99A3D] transition"
            >
              Contact
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}


/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <div className="bg-[#F8F6F1] min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] bg-[#F8F6F1] overflow-hidden">


        {/* Hero Image */}
        <div
          className="
            relative
            w-full
            h-[45vh]

            md:absolute
            md:right-0
            md:top-0
            md:w-[55%]
            md:h-full

            overflow-hidden

            md:[clip-path:ellipse(78%_100%_at_78%_50%)]
          "
        >

          <img
            src="/hero-interior.png"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />

        </div>


        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            min-h-[calc(100vh-80px)]
            flex
            items-center
          "
        >

          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              px-6
              sm:px-10
              py-12
              md:py-0
            "
          >

            <div
              className="
                w-full
                md:w-[48%]
                text-center
                md:text-left
              "
            >

              {/* Small Heading */}
              <p
                className="
                  text-[#C99A3D]
                  tracking-[0.2em]
                  sm:tracking-[0.25em]
                  text-xs
                  sm:text-sm
                  mb-5
                "
              >
                WE DESIGN YOUR DREAM SPACE
              </p>


              {/* Main Heading */}
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-serif
                  leading-tight
                  mb-6
                  text-[#222222]
                "
              >
                Transforming Spaces,
                <br />

                Elevating{" "}

                <span className="text-[#C99A3D]">
                  Lives.
                </span>
              </h1>


              {/* Description */}
              <p
                className="
                  text-[#555555]
                  text-base
                  sm:text-lg
                  leading-7
                  sm:leading-8
                  max-w-xl
                  mx-auto
                  md:mx-0
                  mb-8
                  sm:mb-10
                "
              >
                At InteriorLux__, we believe every space has the potential
                to be extraordinary. Let us bring your vision to life.
              </p>


              {/* Buttons */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  md:justify-start
                  gap-3
                  sm:gap-4
                "
              >

                <Link
                  to="/projects"
                  className="
                    inline-block
                    bg-[#D2A84C]
                    text-[#1A1A1A]
                    px-6
                    sm:px-7
                    py-3
                    sm:py-4
                    rounded-md
                    hover:bg-[#C99A3D]
                    transition
                    text-center
                  "
                >
                  Explore Projects →
                </Link>


                <Link
                  to="/services"
                  className="
                    border
                    border-[#C99A3D]
                    text-[#333333]
                    px-6
                    sm:px-7
                    py-3
                    sm:py-4
                    rounded-md
                    hover:bg-[#C99A3D]
                    hover:text-white
                    transition
                    text-center
                  "
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


/* =========================
   APP
========================= */

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