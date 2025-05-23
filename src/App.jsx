import Navbar from "./components/navbar";
import Imagen from "./../public/images/illustration-working.svg";
import { motion } from "motion/react";
import UrlShoorting from "./components/urlshoorting";
import AdvanceStatistic from "./components/advancestatistic";

function App() {
  return (
    <>
      <main className="bg-white font-poppins">
        <Navbar />
        {/* FIRST PART THE WEB */}
        {/* IMAGEN */}
        <div className="flex justify-end pl-2">
          <img
            src={Imagen}
            alt="Imagen de Fondo"
            className="object-cover object-left h-80 w-full "
          />
        </div>
        <section className="h-96 w-full px-6 md:px-16 lg:px-36 xl:px-48 font-bold py-4 ">
          {/* TEXT TO INFORMATION */}
          <div className="flex flex-col mt-8 gap-4">
            <h1 className="text-4xl font-bold text-center text-[#35323e]">
              More than just shorter links
            </h1>
            <p className="text-lg text-center text-[#908f94] font-medium">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.2, backgroundColor: "#5edbdb" }}
                whileTap={{ scale: 0.8 }}
                className="px-12 py-2 text-lg font-bold text-white bg-cyan-400 rounded-full  "
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </section>
        {/* URL SHORTING */}
        <section className="bg-gradient-to-t from-gray-300 to-white to-50% from-50% h-full">
          <UrlShoorting />
        </section>
        {/* SECOND PART */}
        <section className="h-full bg-gray-300 min-h-screen p-6 ">
          <AdvanceStatistic />
        </section>
        {/* FOOTERS */}
        <footer className="bg-[#35323e] h-20 w-full flex justify-center items-center">
          <p className="text-white text-lg font-bold">Created by Your Name</p>
        </footer>
      </main>
    </>
  );
}

export default App;
