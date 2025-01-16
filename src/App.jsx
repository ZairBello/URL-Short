import Navbar from "./components/navbar";
import Imagen from "./../public/images/illustration-working.svg";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <main className="bg-white h-screen w-full pl-6 md:px-16 lg:px-36 xl:px-48 font-bold py-4 font-poppins">
        <Navbar />
        {/* FIRST PART THE WEB */}
        <section className="h-full">
          {/* IMAGEN */}
          <div className="flex justify-end">
            <img
              src={Imagen}
              alt="Imagen de Fondo"
              className="object-cover object-left h-80 w-full"
            />
          </div>
          {/* TEXT TO INFORMATION */}
          <div className="flex flex-col pr-6 mt-8 gap-4">
            <h1 className="text-4xl font-bold text-center text-[#35323e]">
              More than just shorter links
            </h1>
            <p className="text-lg text-center text-[#908f94] font-medium">
              Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
            <div className="flex justify-center mt-6">
              <motion.button className="px-12 py-2 text-lg font-bold text-white bg-cyan-400 rounded-full hover:bg-cyan-300 duration-150">
                Get Started
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
