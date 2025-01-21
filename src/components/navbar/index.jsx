import { useState } from "react";
import Logo from "../../../public/images/logo.svg";
import { motion, AnimatePresence } from "motion/react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const topVariants = {
    close: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0, 0%, 75%)",
    },
  };

  const centerVariants = {
    close: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const donwVariants = {
    close: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0, 0%, 75%)",
    },
  };

  return (
    <>
      <div className="flex w-full justify-between items-center h-20 pr-6">
        {/* DESKTOP VIEW */}
        <div className="flex">
          <img src={Logo} alt="Logo" className="w-24" />
          <div className="pl-10 gap-6 hidden md:flex text-gray-400">
            <a href="/">Feature</a>
            <a href="/about">Princing</a>
            <a href="/contact">Recources</a>
          </div>
        </div>
        <div className="gap-8 items-center text-gray-400 hidden md:flex">
          <a href="/login">Login</a>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#5edbdb" }}
            whileTap={{ scale: 0.9 }}
            className="bg-cyan-400 px-6 py-2 rounded-full text-white"
          >
            Sign Up
          </motion.button>
        </div>
        {/* MOBIL VIEW */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between relative md:hidden"
        >
          <motion.div
            variants={topVariants}
            initial="close"
            animate={menuOpen ? "opened" : "close"}
            className="w-10 h-1 bg-[#bfbfbf] rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            initial="close"
            animate={menuOpen ? "opened" : "close"}
            className="w-10 h-1 bg-[#bfbfbf] rounded"
          ></motion.div>
          <motion.div
            variants={donwVariants}
            initial="close"
            animate={menuOpen ? "opened" : "close"}
            className="w-10 h-1 bg-[#bfbfbf] rounded origin-left"
          ></motion.div>
        </button>
      </div>
      <div className="flex justify-center">
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: "backOut" }}
              className="flex flex-col absolute p-8 rounded-xl text-white items-center gap-6 bg-[#3A3053] w-4/5 font-bold overflow-hidden"
            >
              <a href="/">Feature</a>
              <a href="/about">Princing</a>
              <a href="/contact">Recources</a>
              <div className=" border-b-2 border-white opacity-15 w-full" />
              <a href="/login">Login</a>
              <motion.a
                whileHover={{ scale: 1.2, backgroundColor: "#5edbdb" }}
                whileTap={{ scale: 0.8 }}
                href="/signup"
                className="bg-cyan-400 w-full flex justify-center py-2 rounded-full"
              >
                Sign Up
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
